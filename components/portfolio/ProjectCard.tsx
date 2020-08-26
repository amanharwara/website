/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const breakpoints = [576, 1024, 1280, 1370];
const media_queries = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ProjectCard = ({ title, id, category, image }: Project) => (
  <div
    className={`project-card`}
    data-id={id}
    tabIndex={0}
    css={css`
      box-sizing: border-box;
      position: relative;
      padding: 1.75vw 2.5vw;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      max-width: 22vw;

      ${media_queries[1]} {
        padding: 1rem;
        min-height: 10rem;
        margin-bottom: 1rem;
        max-width: 100%;

        img {
          height: auto;
          width: 100%;
        }
      }

      &:hover {
        .overlay {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }

        .category {
          background: #fff;
          color: #000;
        }
      }
    `}
  >
    <div
      className="category"
      css={css`
        border-radius: 0.1vw;
        background: transparent;
        border: 1px solid #fff;
        z-index: 2;
        padding: 0.45vw 0.65vw;
        text-transform: uppercase;
        font-size: 0.9vw;
        width: max-content;
        transition: background 0.15s;

        ${media_queries[1]} {
          font-size: 0.65rem;
          padding: 0.4rem 0.5rem;
          border-radius: 2px;
        }
      `}
    >
      {category}
    </div>
    <div
      className="title"
      css={css`
        z-index: 2;
        font-weight: 800;
        font-size: 3.5vw;
        max-height: 8.5vw;
        overflow: hidden;
        white-space: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        line-height: 4vw;

        ${media_queries[1]} {
          font-size: 2rem;
          line-height: 2rem;
          -webkit-line-clamp: 1;
        }
      `}
    >
      {title}
    </div>
    <div
      className="overlay"
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: background 0.15s;
        background: transparent;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0.9) 100%
        );
        z-index: 0;
      `}
    ></div>
    <div
      className="image"
      css={css`
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      `}
    >
      <img
        srcSet={image.srcSet}
        src={image.src}
        alt={image.alt}
        css={css`
          height: 100%;
        `}
      />
    </div>
  </div>
);

export default ProjectCard;