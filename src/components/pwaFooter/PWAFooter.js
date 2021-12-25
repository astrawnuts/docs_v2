import React from "react";
import TabBarItem from "./tabBabItem/TabBarItem";
import Link from "@docusaurus/Link";

export default function PWAFooter() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function sharePage() {
    if (navigator.share) {

      let currentPage = window.location.href.toString();
      let currentPageTitle = document.title.toString();

      navigator.share({
        title: currentPageTitle,
        text: 'Hey You, Check out this page on Help Desk by Tax Matterz ' + currentPageTitle + " | ",
        url: currentPage,
      })

      .then(() => console.log('Share was successful.'))
      .catch((error) => console.log('Sharing failed', error));
    } else {
      console.log(`Your system doesn't support sharing files.`);
    }
    
  }

  return (
    <>
      <div className="tab-bar">
        <div className="container">
          <div className="row-bar">
            <div className="col-bar">
              {/* Articles Button */}
              <div
                className="icon"
                onClick={() => {
                  let width = window.innerWidth;
                  console.log(width);
                  //if app is in mobile mode (without sidebar)
                  if (width <= 996) {
                    document.querySelector("button.navbar__toggle").click();
                  } else {
                    window.location.href = "/";
                  }

                  //if desktop view is showing

                }}
              >
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
                  class="feather feather-book-open"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div className="label">Articles</div>
            </div>
    
            <div className="col-bar">
              {/* Search Button Below */}
              <div
                className="icon"
                onClick={() => {
                  document
                    .querySelector("button.aa-DetachedSearchButton")
                    .click();
                }}
              >
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
              <div className="label">Search</div>
            </div>

            <div className="col-bar" onClick={() => sharePage()}>
              {/* Share Button Below */}
              <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
              </div>
              <div className="label">Share</div>
            </div>

            <div className="col-bar" onClick={() => topFunction()}>
              {/* Scroll To Top Button */}
              <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>
              </div>
              <div className="label">Top</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
