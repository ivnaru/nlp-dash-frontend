export default {
  header: {
    self: {},
    items: [
      {
        title: "Reduced Sugar Concept",
        root: true,
        alignment: "left",
        page: "dashboard",
        translate: "MENU.DASHBOARD",
        submenu: [
          {
            title: "Chewy Mint Concept",
            page: "google-material/layout",
          },
          {
            title: "Test Survey",
            page: "google-material/inputs/autocomplete",
          },
        ]
      },
      {
        title: "3. What do you like...",
        root: true,
        alignment: "right",
        toggle: "click",
        page: "google-material",
        submenu: [
          {
            title: "4. What do you dislike about this product?",
            page: "google-material/layout",
          },
          {
            title: "7. What do you think about this product package?",
            page: "google-material/inputs/autocomplete",
          },
          {
            title: "8. What do you think about this product price?",
            page: "google-material/inputs/autocomplete",
          },
        ]
      },
    ]
  },
  aside: {
    self: {},
    items: [
      {
        title: "Dashboard",
        root: true,
        icon: "flaticon2-architecture-and-city",
        page: "dashboard",
        translate: "MENU.DASHBOARD",
        bullet: "dot"
      },
      {
        title: "Layout Builder",
        root: true,
        icon: "flaticon2-expand",
        page: "builder"
      },
      {
        title: "Bootstrap",
        root: true,
        bullet: "dot",
        icon: "flaticon2-digital-marketing",
        page: "react-bootstrap",
        submenu: [
          {
            title: "Alerts",
            page: "react-bootstrap/alert"
          },
          {
            title: "Accordion",
            page: "react-bootstrap/accordion"
          },
          {
            title: "Badge",
            page: "react-bootstrap/badge"
          },
          {
            title: "Breadcrumb",
            page: "react-bootstrap/breadcrumb"
          },
          {
            title: "Buttons",
            page: "react-bootstrap/buttons"
          },
          {
            title: "Button Group",
            page: "react-bootstrap/button-group"
          },
          {
            title: "Cards",
            page: "react-bootstrap/cards"
          },
          {
            title: "Carousel",
            page: "react-bootstrap/carousel"
          },
          {
            title: "Dropdowns",
            page: "react-bootstrap/dropdowns"
          },
          {
            title: "Forms",
            page: "react-bootstrap/forms"
          },
          {
            title: "Input Group",
            page: "react-bootstrap/input-group"
          },
          {
            title: "Images",
            page: "react-bootstrap/images"
          },
          {
            title: "Figures",
            page: "react-bootstrap/figures"
          },
          {
            title: "Jumbotron",
            page: "react-bootstrap/jumbotron"
          },
          {
            title: "List group",
            page: "react-bootstrap/list-group"
          },
          {
            title: "Modal",
            page: "react-bootstrap/modal"
          },
          {
            title: "Navs",
            page: "react-bootstrap/navs"
          },
          {
            title: "Navbar",
            page: "react-bootstrap/navbar"
          },
          {
            title: "Overlays",
            page: "react-bootstrap/overlays"
          },
          {
            title: "Pagination",
            page: "react-bootstrap/pagination"
          },
          {
            title: "Popovers",
            page: "react-bootstrap/popovers"
          },
          {
            title: "Progress",
            page: "react-bootstrap/progress"
          },
          {
            title: "Spinners",
            page: "react-bootstrap/spinners"
          },
          {
            title: "Table",
            page: "react-bootstrap/table"
          },
          {
            title: "Tabs",
            page: "react-bootstrap/tabs"
          },
          {
            title: "Tooltips",
            page: "react-bootstrap/tooltips"
          },
          {
            title: "Toasts",
            page: "react-bootstrap/toasts"
          }
        ]
      },
      {
        title: "Material UI",
        root: true,
        bullet: "line",
        icon: "flaticon2-browser-2",
        page: "google-material",
        submenu: [
          {
            title: "Layout",
            bullet: "dot",
            page: "google-material/layout/box",
            submenu: [
              {
                title: "Box",
                page: "google-material/layout/box"
              },
              {
                title: "Container",
                page: "google-material/layout/container"
              },
              {
                title: "Grid",
                page: "google-material/layout/grid"
              },
              {
                title: "Grid list",
                page: "google-material/layout/grid-list"
              },
              {
                title: "Hidden",
                page: "google-material/layout/hidden"
              }
            ]
          },
          {
            title: "Inputs",
            bullet: "dot",
            page: "google-material/inputs/autocomplete",
            submenu: [
              {
                title: "Autocomplete",
                page: "google-material/inputs/autocomplete",
                permission: "accessToECommerceModule"
              },
              {
                title: "Buttons",
                page: "google-material/inputs/buttons"
              },
              {
                title: "Checkboxes",
                page: "google-material/inputs/checkboxes"
              },
              {
                title: "Pickers",
                page: "google-material/inputs/pickers"
              },
              {
                title: "Radio Buttons",
                page: "google-material/inputs/radio-buttons"
              },
              {
                title: "Selects",
                page: "google-material/inputs/selects"
              },
              {
                title: "Switches",
                page: "google-material/inputs/switches"
              },
              {
                title: "Text Fields",
                page: "google-material/inputs/text-fields"
              },
              {
                title: "Transfer List",
                page: "google-material/inputs/transfer-list"
              }
            ]
          },
          {
            title: "Navigation",
            bullet: "dot",
            page: "google-material/navigation/bottom-navigation",
            submenu: [
              {
                title: "Bottom Navigation",
                page: "google-material/navigation/bottom-navigation"
              },
              {
                title: "Breadcrumbs",
                page: "google-material/navigation/breadcrumbs"
              },
              {
                title: "Drawers",
                page: "google-material/navigation/drawer"
              },
              {
                title: "Links",
                page: "google-material/navigation/links"
              },
              {
                title: "Menus",
                page: "google-material/navigation/menus"
              },
              {
                title: "Steppers",
                page: "google-material/navigation/steppers"
              },
              {
                title: "Tabs",
                page: "google-material/navigation/tabs"
              }
            ]
          },
          {
            title: "Surfaces",
            bullet: "dot",
            page: "google-material/surfaces/app-bar",
            submenu: [
              {
                title: "App Bar",
                page: "google-material/surfaces/app-bar"
              },
              {
                title: "Paper",
                page: "google-material/surfaces/paper"
              },
              {
                title: "Cards",
                page: "google-material/surfaces/cards"
              },
              {
                title: "Expansion Panels",
                page: "google-material/surfaces/expansion-panels"
              }
            ]
          },
          {
            title: "Feedback",
            bullet: "dot",
            page: "google-material/feedback/progress",
            submenu: [
              {
                title: "Progress",
                page: "google-material/feedback/progress"
              },
              {
                title: "Dialogs",
                page: "google-material/feedback/dialogs"
              },
              {
                title: "Snackbars",
                page: "google-material/feedback/snackbars"
              }
            ]
          },
          {
            title: "Data Display",
            bullet: "dot",
            page: "google-material/data-displays/avatars",
            submenu: [
              {
                title: "Avatars",
                page: "google-material/data-displays/avatars"
              },
              {
                title: "Badges",
                page: "google-material/data-displays/badges"
              },
              {
                title: "Chips",
                page: "google-material/data-displays/chips"
              },
              {
                title: "Dividers",
                page: "google-material/data-displays/dividers"
              },
              {
                title: "Icons",
                page: "google-material/data-displays/icons"
              },
              {
                title: "Lists",
                page: "google-material/data-displays/lists"
              },
              {
                title: "Tables",
                page: "google-material/data-displays/tables"
              },
              {
                title: "Tooltips",
                page: "google-material/data-displays/tooltips"
              },
              {
                title: "Typography",
                page: "google-material/data-displays/typography"
              }
            ]
          },
          {
            title: "Utils",
            bullet: "dot",
            page: "google-material/utils/click-away-listener",
            submenu: [
              {
                title: "Click Away Listener",
                page: "google-material/utils/click-away-listener"
              },
              {
                title: "Modal",
                page: "google-material/utils/modal"
              },
              {
                title: "No SSR",
                page: "google-material/utils/no-ssr"
              },
              {
                title: "Popover",
                page: "google-material/utils/popover"
              },
              {
                title: "Popper",
                page: "google-material/utils/popper"
              },
              {
                title: "Portal",
                page: "google-material/utils/portal"
              },
              {
                title: "Transitions",
                page: "google-material/utils/transitions"
              },
              {
                title: "useMediaQuery",
                page: "google-material/utils/use-media-query"
              }
            ]
          }
        ]
      },
      {
        title: "Error Pages",
        root: true,
        bullet: "dot",
        icon: "flaticon-danger",
        page: "error/error-v1",
        submenu: [
          {
            title: "Error Page - 1",
            page: "error/error-v1"
          },
          {
            title: "Error Page - 2",
            page: "error/error-v2"
          },
          {
            title: "Error Page - 3",
            page: "error/error-v3"
          },
          {
            title: "Error Page - 4",
            page: "error/error-v4"
          },
          {
            title: "Error Page - 5",
            page: "error/error-v5"
          },
          {
            title: "Error Page - 6",
            page: "error/error-v6"
          }
        ]
      }
    ]
  }
};
