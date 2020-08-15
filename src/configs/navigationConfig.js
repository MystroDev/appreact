import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "analyticsDash",
        title: "Analytics",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/"
      },
      {
        id: "users",
        title: "Utilisateurs",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/data-list/Users"
      },
      {
        id: "autorisations",
        title: "Autorisations",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/data-list/Autorisations"
      },
      
      {
        id: "conges",
        title: "Congés",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/data-list/Conges"
      }
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "APPS"
  },

  {
    id: "chat",
    title: "Chat",
    type: "item",
    icon: <Icon.MessageSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/chat"
  },
  {
    id: "todo",
    title: "Todo",
    type: "item",
    icon: <Icon.CheckSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/todo/:filter",
    filterBase: "/todo/all"
  },
  {
    id: "calendar",
    title: "Calendar",
    type: "item",
    icon: <Icon.Calendar size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/calendar"
  },
  {
    id: "users",
    title: "User",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "list",
        title: "List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/user/list"
      },
      {
        id: "view",
        title: "View",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/user/view"
      },
      {
        id: "edit",
        title: "Edit",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/user/edit"
      }
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "UI ELEMENTS"
  },
  {
    id: "dataList",
    title: "Data List",
    type: "collapse",
    icon: <Icon.List size={20} />,
    badge: "primary",
    badgeText: "new",
    children: [
      {
        id: "listView",
        title: "List View",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/data-list/list-view"
      },
      
      {
        id: "thumbView",
        title: "Thumb View",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/data-list/thumb-view"
      }
    ]
  },
  {
    id: "content",
    title: "Content",
    type: "collapse",
    icon: <Icon.Layout size={20} />,
    children: [
      {
        id: "gird",
        title: "Grid",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/ui-element/grid"
      },
      {
        id: "typography",
        title: "Typography",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/ui-element/typography"
      },
      {
        id: "textUitlities",
        title: "Text Utilities",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/ui-element/textutilities"
      },
      {
        id: "syntaxHighlighter",
        title: "Syntax Highlighter",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/ui-element/syntaxhighlighter"
      }
    ]
  },
  {
    id: "colors",
    title: "Colors",
    type: "item",
    icon: <Icon.Droplet size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/colors/colors"
  },

 
  {
    id: "components",
    title: "Components",
    type: "collapse",
    icon: <Icon.Briefcase size={20} />,
    children: [
      {
        id: "alerts",
        title: "Alerts",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/alerts"
      },
      {
        id: "buttons",
        title: "Buttons",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/buttons"
      },
      {
        id: "breadCrumbs",
        title: "Breadcrumbs",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/breadcrumbs"
      },
      {
        id: "carousel",
        title: "Carousel",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/carousel"
      },
      {
        id: "collapse",
        title: "Collapse",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/collapse"
      },
      {
        id: "dropDowns",
        title: "Dropdowns",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/dropdowns"
      },
      {
        id: "listGroup",
        title: "List Group",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/list-group"
      },
      {
        id: "modals",
        title: "Modals",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/modals"
      },
      {
        id: "navsComponent",
        title: "Navs Component",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/nav-component"
      },
      {
        id: "navbar",
        title: "Navbar",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/navbar"
      },
      {
        id: "tabsComponent",
        title: "Tabs Component",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/tabs-component"
      },
      {
        id: "pillsComponent",
        title: "Pills Component",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/pills-component"
      },
      {
        id: "tooltips",
        title: "Tooltips",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/tooltips"
      },
      {
        id: "popovers",
        title: "Popovers",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/popovers"
      },
      {
        id: "badges",
        title: "Badges",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/badges"
      },
      {
        id: "pillBadges",
        title: "Pill Badges",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/pill-badges"
      },
      {
        id: "progress",
        title: "Progress",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/progress"
      },
      {
        id: "mediaObjects",
        title: "Media Objects",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/media-objects"
      },
      {
        id: "spinners",
        title: "Spinners",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/spinners"
      },
      {
        id: "toasts",
        title: "Toasts",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/components/toasts"
      }
    ]
  },
  {
    id: "extraComponents",
    title: "Extra Components",
    type: "collapse",
    icon: <Icon.Box size={20} />,
    children: [
      {
        id: "autoComplete",
        title: "Auto Complete",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/extra-components/auto-complete"
      },
      {
        id: "avatar",
        title: "Avatar",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/extra-components/avatar"
      },
      {
        id: "chips",
        title: "Chips",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/extra-components/chips"
      },
      {
        id: "divider",
        title: "Divider",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/extra-components/divider"
      }
    ]
  },

  {
    type: "groupHeader",
    groupTitle: "PAGES"
  },

  {
    id: "accountSettings",
    title: "Account Settings",
    type: "item",
    icon: <Icon.Settings size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/account-settings"
  },


  {
    id: "invoice",
    title: "Invoice",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/invoice"
  },

  {
    type: "groupHeader",
    groupTitle: "EXTENSIONS"
  },
  {
    id: "fileUploader",
    title: "File Uploader",
    icon: <Icon.UploadCloud size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/file-uploader"
  },
  {
    id: "wysiwygEditor",
    title: "Wysiwyg Editor",
    icon: <Icon.Edit size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/wysiwyg-editor"
  },
  {
    id: "drag_&_drop",
    title: "Drag & Drop",
    icon: <Icon.Droplet size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/drag-and-drop"
  },
  {
    id: "access-control",
    title: "Access Control",
    icon: <Icon.Lock size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/access-control"
  },
  {
    id: "extPagination",
    title: "Pagination",
    icon: <Icon.MoreHorizontal size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/pagination"
  },
  {
    id: "extImport",
    title: "Import",
    icon: <Icon.DownloadCloud size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/import"
  },
  {
    id: "extExport",
    title: "Export",
    icon: <Icon.UploadCloud size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/export"
  },
  {
    id: "extExportSelected",
    title: "Export Selected",
    icon: <Icon.CheckSquare size={20} />,
    type: "item",
    navLink: "/extensions/export-selected",
    permissions: ["admin", "editor"]
  },
  {
    type: "groupHeader",
    groupTitle: "OTHERS"
  },
  {
    type: "groupHeader",
    groupTitle: "SUPPORT"
  }

]

export default navigationConfig
