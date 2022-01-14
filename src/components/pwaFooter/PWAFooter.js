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
                  class="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <div class="label">Search</div>
            </button>

            <button class="col-bar" onClick={() => sharePage()}>
              {/* Share Button Below */}
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
                  class="feather feather-share"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <polyline points="16 6 12 2 8 6"></polyline>
                  <line x1="12" y1="2" x2="12" y2="15"></line>
                </svg>
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
