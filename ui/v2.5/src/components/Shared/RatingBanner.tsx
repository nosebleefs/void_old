import React from "react";
import { useIntl } from "react-intl";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  convertToRatingFormat,
  defaultRatingSystemOptions,
  RatingStarPrecision,
  RatingSystemType,
} from "src/utils/rating";
import { useConfigurationContext } from "src/hooks/Config";
import { Icon } from "./Icon";

interface IProps {
  rating?: number | null;
}

export const RatingBanner: React.FC<IProps> = ({ rating }) => {
  const intl = useIntl();
  const { configuration: config } = useConfigurationContext();
  const ratingSystemOptions =
    config?.ui.ratingSystemOptions ?? defaultRatingSystemOptions;
  const isLegacy =
    ratingSystemOptions.type === RatingSystemType.Stars &&
    ratingSystemOptions.starPrecision === RatingStarPrecision.Full;

  const convertedRating = convertToRatingFormat(
    rating ?? undefined,
    ratingSystemOptions
  );

  const label = `${intl.formatMessage({ id: "rating" })}: ${convertedRating}`;

  // The rating-* classes are kept so existing custom CSS can still target them.
  return rating ? (
    <div
      className={
        isLegacy
          ? `rating-banner rating-${convertedRating}`
          : `rating-banner rating-100-${Math.trunc(rating / 5)}`
      }
      data-rating100={rating}
      data-rating-system={ratingSystemOptions.type}
      style={{ "--rating-100": rating } as React.CSSProperties}
      title={label}
      aria-label={label}
    >
      <Icon icon={faStar} />
      <span aria-hidden="true">{convertedRating}</span>
    </div>
  ) : null;
};
