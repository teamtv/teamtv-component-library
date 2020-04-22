import React from "react";

import { FilterOptions } from "filter-options";

// import './index.scss';
import { NavLink } from "react-router-dom";

/**
 *
 * ================ TODO ===============
 *  MOVE THIS TO THE COMPONENT LIBRARY
 * ================ TODO ===============
 *
 */

// import { StartTourButton } from 'modules/tour';

// Example props:jb
// const exampleProps = {
//   title: 'Leerlijnen',
//   breadcrumbs: [
//     { path: '#', title: 'Home' },
//     { path: '#', title: 'Development' },
//     { path: '#', title: 'Personal' },
//     { title: this.person.fullName },
//   ],
//   primaryAction: {
//     title: 'my primary action',
//     onClick: console.debug,
//   },
//   subtitle: this.person.fullName,
//   icon:
//     'https://web-assets.teamtv.nl/profile_picture/77927dee3348fed6c5456c7eb1ab5b43-84fe249e3b8724aed5e63389f36ae1ce.jpg',
//   filters: [
//     { path: '#', title: 'Teamontwikkeling' },
//     { path: '#', title: 'Spelerontwikkeling', isActive: true },
//   ],
// };
export const Page = ({
  className = "",
  title,
  subtitle,
  pageTitle,
  icon,
  primaryAction,
  breadcrumbs = [],
  filters = [],
  showPageTour = true,
  children,
  fullWidth = false,
  hideFooter = false,
  hideInset = false,
  showHeaderBackground = false,
  headerChildren = [],
  insetChildren = [],
}: {
  className?: string;
  title?: string;
  subtitle?: string;
  pageTitle?: string;
  icon?: string;
  primaryAction?: { title: string; onClick: () => void };
  breadcrumbs?: { title: string; path: string }[];
  filters?: any;
  showPageTour?: boolean;
  fullWidth?: boolean;
  hideFooter?: boolean;
  hideInset?: boolean;
  showHeaderBackground?: boolean;
  headerChildren?: any;
  insetChildren?: any;
  children?: any;
}) => {
  const iconStyles = icon ? { backgroundImage: `url(${icon})` } : {};
  const hasHeaderChildren =
    React.isValidElement(headerChildren) ||
    React.isValidElement(headerChildren[0]);
  const hasInsetChildren =
    React.isValidElement(insetChildren) ||
    React.isValidElement(insetChildren[0]);

  return (
    <div
      className={`page ${className}`}
      style={hideFooter ? { paddingBottom: "0" } : {}}
    >
      <header
        className={`page-header ${
          showHeaderBackground ? "page-header-with-bg" : ""
        }`}
      >
        {!hideInset && (
          <div className="page-header-inset-wrapper">
            <div className="page-header-inset">
              {title && <div className="page-title">{title}</div>}
              {hasInsetChildren && insetChildren}
              {breadcrumbs.length > 0 && (
                <ol className="breadcrumb">
                  {breadcrumbs.map((breadcrumb, idx) => (
                    <li
                      key={breadcrumb.title + idx}
                      className="breadcrumb-item"
                    >
                      {breadcrumb.path ? (
                        <NavLink
                          className="breadcrumb-item-link"
                          to={breadcrumb.path}
                        >
                          {breadcrumb.title}
                        </NavLink>
                      ) : (
                        <span>{breadcrumb.title}</span>
                      )}
                    </li>
                  ))}
                </ol>
              )}
              {/* {showPageTour && (
                <div className="page-header-tour">
                  <StartTourButton />
                </div>
              )} */}
            </div>
          </div>
        )}
        {(primaryAction ||
          pageTitle ||
          subtitle ||
          icon ||
          filters.length > 0 ||
          hasHeaderChildren) && (
          <div className="page-header-content">
            {pageTitle && <h1 className="page-title">{pageTitle}</h1>}
            {primaryAction && (
              <div className="page-header-cta">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.title}
                </button>
              </div>
            )}
            {(subtitle || icon) && (
              <div className="page-subtitle">
                {subtitle && (
                  <div className="page-subtitle-text">{subtitle}</div>
                )}
                {icon && (
                  <div
                    className="page-subtitle-icon"
                    style={iconStyles || {}}
                  />
                )}
              </div>
            )}
            {filters.length > 0 && (
              <div className="page-actions">
                <FilterOptions filters={filters} />
              </div>
            )}
            {headerChildren}
          </div>
        )}
      </header>

      <div className={fullWidth ? "" : "page-body"}>{children}</div>
    </div>
  );
};
