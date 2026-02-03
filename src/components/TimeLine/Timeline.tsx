import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import React from "react";
import { styled, Typography } from "@mui/material";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const StyledBody = styled("section")(({ theme }) => ({
  background: theme.palette.gradient.dark,
  minHeight: "100vh",
  padding: theme.spacing(8, 2),
  color: theme.palette.common.white,
}));

const Timeline: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledBody>
      <Fade delay={400}>
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          color="primary.contrastText"
          marginBottom="60px"
          id="experience"
        >
          {t("timeline.title")}
        </Typography>
      </Fade>
      <div className="bg-black min-h-screen text-white p-10">
        <Fade delay={400}>
          <VerticalTimeline lineColor="#fff">
            {/* chegada e adaptaçoes */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#0f172a71",
                color: "#fff",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
              date={t("timeline.events.arrival.date")}
              iconStyle={{
                background: "linear-gradient(to bottom, #2F0743, #41295a)",
                color: "#fff",
              }}
              icon={<FlightLandIcon />}
            >
              <Fade delay={200} duration={3000} fraction={0.5}>
                <h3 className="text-lg font-bold">
                  {t("timeline.events.arrival.title")}
                </h3>
                <h4 className="text-sm text-green-400">
                  {t("timeline.events.arrival.subtitle")}
                </h4>
                <p>{t("timeline.events.arrival.description")}</p>
              </Fade>
            </VerticalTimelineElement>

            {/* 1 ano no colegio */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#0f172a71",
                color: "#fff",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
              date={t("timeline.events.firstYear.date")}
              iconStyle={{
                background: "linear-gradient(to bottom, #2F0743, #41295a)",
                color: "#fff",
              }}
              icon={<FaLaptopCode />}
            >
              <Fade delay={200} duration={3000} fraction={0.5}>
                <h3 className="text-lg font-bold">
                  {t("timeline.events.firstYear.title")}
                </h3>
                <h4 className="text-sm text-green-400">
                  {t("timeline.events.firstYear.subtitle")}
                </h4>
                <p>{t("timeline.events.firstYear.description")}</p>
              </Fade>
            </VerticalTimelineElement>

            {/* 2 ano no colegio */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#0f172a71",
                color: "#fff",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
              date={t("timeline.events.secondYear.date")}
              iconStyle={{
                background: "linear-gradient(to bottom, #2F0743, #41295a)",
                color: "#fff",
              }}
              icon={<FaLaptopCode />}
            >
              <Fade delay={200} duration={3000} fraction={0.5}>
                <h3 className="text-lg font-bold">
                  {t("timeline.events.secondYear.title")}
                </h3>
                <h4>{t("timeline.events.secondYear.subtitle")}</h4>
                <p>{t("timeline.events.secondYear.description")}</p>
              </Fade>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#0f172a71",
                color: "#fff",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
              date={t("timeline.events.summer.date")}
              iconStyle={{
                background: "linear-gradient(to bottom, #2F0743, #41295a)",
                color: "#fff",
              }}
              icon={<FaLaptopCode />}
            >
              <Fade delay={200} duration={3000} fraction={0.5}>
                <h3 className="text-lg font-bold">
                  {t("timeline.events.summer.title")}
                </h3>
                <h4>{t("timeline.events.summer.subtitle")}</h4>
                <p>{t("timeline.events.summer.description")}</p>
              </Fade>
            </VerticalTimelineElement>
            {/* Formação FINALMENTE */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#0f172a71",
                color: "#fff",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
              date={t("timeline.events.graduation.date")}
              iconStyle={{
                background: "linear-gradient(to bottom, #2F0743, #41295a)",
                color: "#fff",
              }}
              icon={<FaGraduationCap />}
            >
              <Fade delay={200} duration={3000} fraction={0.5}>
                <h3 className="text-lg font-bold">
                  {t("timeline.events.graduation.title")}
                </h3>
                <h4>{t("timeline.events.graduation.subtitle")}</h4>
                <p>{t("timeline.events.graduation.description")}</p>
              </Fade>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Fade>
      </div>
    </StyledBody>
  );
};

export default Timeline;
