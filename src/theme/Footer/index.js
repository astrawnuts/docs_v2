/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useThemeConfig } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import isInternalUrl from "@docusaurus/isInternalUrl";
import styles from "./styles.module.css";
import ThemedImage from "@theme/ThemedImage";
import IconExternalLink from "@theme/IconExternalLink";
import PWAFooter from "../../components/pwaFooter/PWAFooter";

function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      class="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {href && !isInternalUrl(href) ? (
        <span>
          {label}
          <IconExternalLink />
        </span>
      ) : (
        label
      )}
    </Link>
  );
}

function FooterLogo({ sources, alt, width, height }) {
  return (
    <ThemedImage
      class="footer__logo"
      alt={alt}
      sources={sources}
      width={width}
      height={height}
    />
  );
}

function Footer() {
  const { footer } = useThemeConfig();
  const { copyright, links = [], logo = {} } = footer || {};
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  if (!footer) {
    return null;
  }

  return (
    <>
      <PWAFooter />
      <footer
        class={clsx("footer", {
          "footer--dark": footer.style === "dark",
        })}
      >
        <div class="container">
          {links && links.length > 0 && (
            <div class="row footer__links">
              {links.map((linkItem, i) => (
                <div key={i} class="col footer__col">
                  {linkItem.title != null ? (
                    <div class="footer__title">{linkItem.title}</div>
                  ) : null}
                  {linkItem.items != null &&
                  Array.isArray(linkItem.items) &&
                  linkItem.items.length > 0 ? (
                    <ul class="footer__items">
                      {linkItem.items.map((item, key) =>
                        item.html ? (
                          <li
                            key={key}
                            class="footer__item" // Developer provided the HTML, so assume it's safe.
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                              __html: item.html,
                            }}
                          />
                        ) : (
                          <li
                            key={item.href || item.to}
                            class="footer__item"
                          >
                            <FooterLink {...item} />
                          </li>
                        )
                      )}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          )}
          {(logo || copyright) && (
            <div class="footer__bottom text--center">
              {logo && (logo.src || logo.srcDark) && (
                <div class="margin-bottom--sm">
                  {logo.href ? (
                    <Link href={logo.href} class={styles.footerLogoLink}>
                      <FooterLogo
                        alt={logo.alt}
                        sources={sources}
                        width={logo.width}
                        height={logo.height}
                      />
                    </Link>
                  ) : (
                    <FooterLogo alt={logo.alt} sources={sources} />
                  )}
                </div>
              )}
              {copyright ? (
                <div
                  class="footer__copyright" // Developer provided the HTML, so assume it's safe.
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: copyright,
                  }}
                />
              ) : null}
            </div>
          )}
        </div>
      </footer>
    </>
  );
}

export default Footer;
