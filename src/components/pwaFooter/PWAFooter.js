import React from "react";
import TabBarItem from "./tabBabItem/TabBarItem";
import Link from "@docusaurus/Link";

export default function PWAFooter() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  //share current page on mobile
  function sharePage() {
    if (navigator.share) {
      let currentPage = window.location.href.toString();
      let currentPageTitle = document.title.toString();
      let text =
        "👀 See this article on Help Desk By Tax Matterz: " +
        currentPageTitle +
        " | It may help you answer your question. | 💬 Talk to us for your next website design project.";

      navigator
        .share({
          title: currentPageTitle,
          text: text,
          url: currentPage,
        })

        .then(() => console.log("Share was successful."))
        .catch((error) => console.log("Sharing failed", error));
    } else {
      console.log(`Your system doesn't support sharing files.`);
    }
  }

  return (
    <>
      <div class="tab-bar">
        <div class="container">
          <div class="row-bar">
            <button
              class="col-bar __active"
              onClick={() => {
                let width = window.innerWidth;
                console.log(width);
                //if app is in mobile mode (without sidebar)
                if (width <= 996) {
                  event.preventDefault();
                  document.querySelector("button.navbar__toggle").click();
                } else {
                  // window.location.href = "/";
                }

                //if desktop view is showing
              }}
            >
              {/* Articles Button */}
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 1l-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z" />
                </svg>
              </div>
              <div class="label">Articles</div>
            </button>

            <button
              class="col-bar"
              onClick={() => {
                document
                  .querySelector("button.aa-DetachedSearchButton")
                  .click();
              }}
            >
              {/* Search Button Below */}
              <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </div>
              <div class="label">Search</div>
            </button>

            <button class="col-bar" onClick={() => sharePage()}>
              {/* Share Button Below */}
              <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"/></svg>
              </div>
              <div class="label">Share</div>
            </button>

            <button class="col-bar" onClick={() => topFunction()}>
              {/* Scroll To Top Button */}
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-corner-right-up"
                >
                  <polyline points="10 9 15 4 20 9"></polyline>
                  <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                </svg>
              </div>
              <div class="label">Go Top</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
