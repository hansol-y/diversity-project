import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEvents } from "state";

const eventCreateSchema = yup.object().shape({
  title: yup.string().required("Please set title").min(2).max(50),
  date: yup.string().required("Please set date of the event"),
  description: yup.string().required("Please provide explanations of the event"),
  location: yup.string().required("Please set location of the event")
});

const findEventSchema = yup.object().shape({
  title: yup.string().required("Enter the event title you are looking for"),
});

const initialValuesEvent = {
  title: "",
  date: '2025-01-01',
  description: "",
  location: "virtual",
  participants: yup.array()
};

const Form = () => {
  const [pageType, setPageType] = useState("create event");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isCreateEvent = pageType === "createEvent";

  const createEvent = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }

    const savedEventResponse = await fetch(
      "http://localhost:3001/events/createEvent",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedEvent = await savedEventResponse.json();
    onSubmitProps.resetForm();
    if (savedEvent) {
      dispatch(
        setEvents({
          title: savedEvent.title,
          date: savedEvent.date,
          location: savedEvent.location,
          description: savedEvent.description,
          participants: savedEvent.participants,
        })
      );
      navigate("/home");
    }
  }

  const homepage = () => {
    navigate("/home");
  }

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isCreateEvent) await createEvent(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesEvent}
      validationSchema={eventCreateSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              label="Title"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.title}
              name="title"
              error={Boolean(touched.title) && Boolean(errors.title)}
              helperText={touched.title && errors.title}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Date"
              type="date"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.date}
              name="date"
              error={Boolean(touched.date) && Boolean(errors.date)}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Description"
              type="description"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.description}
              name="description"
              error={Boolean(touched.description) && Boolean(errors.description)}
              helperText={touched.description && errors.description}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Location"
              type="location"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.location}
              name="location"
              error={Boolean(touched.location) && Boolean(errors.location)}
              helperText={touched.location && errors.location}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="create"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
              onClick={() => {
                SubmitEvent();
                homepage();
              }}
            >
              {"Create Event"}
            </Button>
            <Typography
              onClick={() => {
                homepage();
              }}
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
            >
              {"Go back to homepage"}
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
