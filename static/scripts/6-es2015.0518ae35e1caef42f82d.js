(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "0z5/":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/projects/prediction-outcomes/prediction-outcomes.enum.ts ***!
  \**********************************************************************************/
/*! exports provided: EOutcomesMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOutcomesMode", function() { return EOutcomesMode; });
var EOutcomesMode = /*@__PURE__*/ (function (EOutcomesMode) {
    EOutcomesMode["PREDICTION"] = "PREDICTION";
    EOutcomesMode["VIEW"] = "VIEW";
    return EOutcomesMode;
})({});



/***/ }),

/***/ "2sBM":
/*!***************************************************************************!*\
  !*** ./src/app/modules/projects/projects-list/projects-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function() { return ProjectsListComponent; });
/* harmony import */ var _bitf_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitf/utils */ "j6om");
/* harmony import */ var _bitf_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitf/api */ "dG+F");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _modules_projects_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/projects/new-project/new-project.component */ "9cDe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared_carbon_design__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/carbon-design */ "F8kB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_common_utilities_default_header_default_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/common-utilities/default-header/default-header.component */ "3m0x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_common_utilities_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/common-utilities/search-bar/search-bar.component */ "KGsc");
/* harmony import */ var _shared_icons_add_alt_icon_add_alt_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/icons/add-alt-icon/add-alt-icon.component */ "hkMv");
/* harmony import */ var _shared_common_utilities_grid_list_view_grid_list_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/common-utilities/grid-list-view/grid-list-view.component */ "bXEF");
/* harmony import */ var _shared_carbon_design_bx_pagination_bx_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/carbon-design/bx-pagination/bx-pagination.component */ "u9GO");
/* harmony import */ var _shared_common_utilities_filters_filters_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/common-utilities/filters/filters.component */ "jnIP");
/* harmony import */ var _shared_carbon_design_bx_dropdown_bx_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/carbon-design/bx-dropdown/bx-dropdown.component */ "Kcv9");
/* harmony import */ var _shared_common_utilities_avatar_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/common-utilities/avatar.directive */ "CDol");
/* harmony import */ var _shared_icons_delete_icon_delete_icon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/icons/delete-icon/delete-icon.component */ "KW4w");


















function ProjectsListComponent_span_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Total: ", ctx_r0.pagination.totalItems, " ");
    }
}
const _c0 = function () { return ["date"]; };
function ProjectsListComponent_ibm_filters_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-filters", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("hideFilters", function ProjectsListComponent_ibm_filters_12_Template_ibm_filters_hideFilters_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.hideFilters(); })("cancel", function ProjectsListComponent_ibm_filters_12_Template_ibm_filters_cancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.hideFilters(); })("filtersChange", function ProjectsListComponent_ibm_filters_12_Template_ibm_filters_filtersChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.onFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("filters", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0))("filtersValues", ctx_r1.filters == null ? null : ctx_r1.filters.filtersValues);
    }
}
const _c1 = function () { return ["property", "direction"]; };
function ProjectsListComponent_ibm_bx_dropdown_20_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-bx-dropdown", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("select", function ProjectsListComponent_ibm_bx_dropdown_20_Template_ibm_bx_dropdown_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r2.sortOptions)("selectedValue", ctx_r2.currentSorting)("compositeKey", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c1));
    }
}
function ProjectsListComponent_div_30_ng_container_25_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 54);
    }
    if (rf & 2) {
        const collaborator_r17 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", collaborator_r17.user.fullName)("ibmBackgroundAvatar", collaborator_r17.user == null ? null : collaborator_r17.user.picture);
    }
}
function ProjectsListComponent_div_30_ng_container_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Collaborator:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProjectsListComponent_div_30_ng_container_25_div_3_Template, 1, 2, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const project_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", project_r12.collaborators);
    }
}
function ProjectsListComponent_div_30_button_35_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsListComponent_div_30_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const project_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onDelete(project_r12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ibm-delete-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
function ProjectsListComponent_div_30_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "article", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsListComponent_div_30_Template_h2_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const project_r12 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.onViewReactionsClick(project_r12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Owner:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Created ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Updated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ProjectsListComponent_div_30_ng_container_25_Template, 4, 1, "ng-container", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsListComponent_div_30_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const project_r12 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.onViewRetrosynthesisClick(project_r12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " View Retrosynthesis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsListComponent_div_30_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const project_r12 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.onViewReactionsClick(project_r12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " View Reactions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsListComponent_div_30_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const project_r12 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.onViewSynthesisClick(project_r12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " View Synthesis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ProjectsListComponent_div_30_button_35_Template, 2, 0, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const project_r12 = ctx.$implicit;
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", project_r12.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", project_r12.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Reactions Collected: ", project_r12.totalReactionsCollected, " / Retrosynthesis Collected: ", project_r12.totalRetrosynthesisCollected, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", project_r12.createdBy == null ? null : project_r12.createdBy.fullName)("ibmBackgroundAvatar", project_r12.createdBy == null ? null : project_r12.createdBy.picture);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](18, 10, project_r12.createdOn, "dd-MM-yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](23, 13, project_r12.modifiedOn, "dd-MM-yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", project_r12.collaborators == null ? null : project_r12.collaborators.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.showDeleteButton(project_r12));
    }
}
function ProjectsListComponent_div_34_Template(rf, ctx) {
    if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "You haven't created any project yet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsListComponent_div_34_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.showCreateNewProjectModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Create a new project now! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
}
const _c2 = function () { return [8, 16, 24]; };
let ProjectsListComponent = /*@__PURE__*/ (() => {
    class ProjectsListComponent {
        constructor(apiService, toastMessagesService, modalService, router, activatedRoute) {
            this.apiService = apiService;
            this.toastMessagesService = toastMessagesService;
            this.modalService = modalService;
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.viewMode = 'grid';
            this.defaultFirstPage = 0;
            this.defaultItemsPerPage = 8;
        }
        ngOnInit() {
            this.doSearch({ page: this.defaultFirstPage, size: this.defaultItemsPerPage });
            this.initSort();
        }
        showDeleteButton(project) {
            const userId = project.createdBy instanceof _models__WEBPACK_IMPORTED_MODULE_2__["User"] ? project.createdBy.id : project.createdBy;
            return userId === this.apiService.auth.user.id;
        }
        toggleFilters() {
            setTimeout(() => {
                this.showFilters = !this.showFilters;
            });
        }
        hideFilters() {
            this.showFilters = false;
        }
        initSort() {
            this.sortOptions = [
                {
                    label: 'Name asc ',
                    value: {
                        property: 'name',
                        direction: _bitf_api__WEBPACK_IMPORTED_MODULE_1__["IApiSortDirection"].ASC,
                    },
                },
                {
                    label: 'Name desc ',
                    value: {
                        property: 'name',
                        direction: _bitf_api__WEBPACK_IMPORTED_MODULE_1__["IApiSortDirection"].DESC,
                    },
                },
                {
                    label: 'Date asc ',
                    value: {
                        property: 'createdOn',
                        direction: _bitf_api__WEBPACK_IMPORTED_MODULE_1__["IApiSortDirection"].ASC,
                    },
                },
                {
                    label: 'Date desc ',
                    value: {
                        property: 'createdOn',
                        direction: _bitf_api__WEBPACK_IMPORTED_MODULE_1__["IApiSortDirection"].DESC,
                    },
                },
            ];
        }
        showCreateNewProjectModal() {
            this.modalService.showModal(_modules_projects_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_3__["NewProjectComponent"], {
                data: {
                    onProjectCreate: (project) => {
                        this.modalService.hideModal();
                        this.router.navigate(['projects', project.id, 'workspace']);
                    },
                },
            });
        }
        onSearch(event) {
            this.searchString = event.searchString;
            this.doSearch({
                page: this.defaultFirstPage,
                size: this.pagination.size,
            });
        }
        onFilter(event) {
            this.filters = event;
            this.hideFilters();
            this.doSearch({
                page: this.defaultFirstPage,
                size: this.pagination.size,
            });
        }
        onPageChanged(event) {
            this.doSearch({ page: event.page, size: event.size });
        }
        onSort(sorting) {
            this.currentSorting = sorting.value;
            this.doSearch({ page: this.defaultFirstPage, size: this.pagination.size });
        }
        doSearch(params = {}) {
            params.query = Object(_bitf_utils__WEBPACK_IMPORTED_MODULE_0__["getMongoQuery"])(this.filters, this.searchString, ['name']);
            params.computedFields = ['totalReactionsCollected', 'totalRetrosynthesisCollected'];
            params.embed = ['collaborators', 'createdBy'];
            params.sorting = [this.currentSorting];
            this.apiService.projects.get(params).subscribe(c => {
                this.projects = c.content;
                this.pagination = c.pagination;
                this.currentSorting = c.sorting && c.sorting[0] ? c.sorting[0] : undefined;
            }
            // ,
            // error => {
            //   this.toastMessagesService.showError('Project loading', 'Error on projects loading');
            // }
            );
        }
        changeViewMode(viewMode) {
            this.viewMode = viewMode;
        }
        onExport(project) {
            this.apiService.projects.export(project).subscribe(result => {
                this.toastMessagesService.showSuccess('Project export', 'Project has been exported');
            }, () => {
                this.toastMessagesService.showError('Project export', 'Error on project export');
            });
        }
        onDelete(project) {
            this.modalService.confirmDelete({
                header: 'Delete project',
                data: {
                    content: `Are you sure to delete: ${project.name}?`,
                    callbackNo: () => { },
                    callbackYes: () => {
                        this.apiService.projects.delete(project).subscribe(result => {
                            this.toastMessagesService.showSuccess('Project delete', 'Project has been deleted');
                            this.doSearch({
                                page: this.defaultFirstPage,
                                size: this.pagination.size,
                            });
                        }, () => {
                            this.toastMessagesService.showError('Project delete', 'Error on project delete');
                        });
                    },
                },
            });
        }
        onViewReactionsClick(project) {
            this.router.navigate([project.id, project.name, 'reactions-collection'], {
                relativeTo: this.activatedRoute.parent,
            });
        }
        onViewRetrosynthesisClick(project) {
            this.router.navigate([project.id, project.name, 'retrosynthesis-collection'], {
                relativeTo: this.activatedRoute.parent,
            });
        }
        onViewSynthesisClick(project) {
            this.router.navigate(['/robo-rxn', 'project', project.id]);
        }
    }
    ProjectsListComponent.ɵfac = function ProjectsListComponent_Factory(t) { return new (t || ProjectsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_carbon_design__WEBPACK_IMPORTED_MODULE_6__["ToastMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_carbon_design__WEBPACK_IMPORTED_MODULE_6__["BxModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
    ProjectsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProjectsListComponent, selectors: [["ibm-projects-list"]], decls: 35, vars: 12, consts: [[1, "ibm--body__fixed"], [1, "bx--grid", "mt-2"], [1, "bx--row"], [1, "bx--col-lg-8", "align", "align-left"], [1, "bx--type-alfa", "mr-1"], ["class", "bx--tag bx--tag--gray", 4, "ngIf"], [1, "bx--col-lg-8", "align", "align-right", "position-relative"], ["placeholder", "Search by name", 1, "w-100", "mr-05", 3, "searchChange"], [1, "show-filters-button", 3, "disabled", "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill-rule", "evenodd"], ["d", "M10.9 3c-.4-1.7-2-3-3.9-3S3.6 1.3 3.1 3H0v2h3.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3H24V3H10.9zM7 5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm10 3c-1.9 0-3.4 1.3-3.9 3H0v2h13.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3H24v-2h-3.1c-.5-1.7-2-3-3.9-3zm0 5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM7 16c-1.9 0-3.4 1.3-3.9 3H0v2h3.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3H24v-2H10.9c-.5-1.7-2-3-3.9-3zm0 5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"], [3, "filters", "filtersValues", "hideFilters", "cancel", "filtersChange", 4, "ngIf"], [1, "bx--row", "mt-1", "mb-2"], [1, "bx--col-sm-4"], ["type", "button", 1, "bx--btn", "bx--btn--primary", 3, "click"], [1, "bx--btn__icon"], [1, "align"], [1, "bx--select", "align-items-end"], ["label", "Sort by", 3, "options", "selectedValue", "compositeKey", "select", 4, "ngIf"], ["type", "button", "title", "Grid View", 1, "btn--clean", "ml-2", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill-rule", "evenodd"], ["d", "M0 0h7v7H0zm9 0h7v7H9zM0 9h7v7H0zm9 0h7v7H9z"], ["type", "button", "title", "List View", 1, "btn--clean", 3, "click"], ["width", "16", "height", "14", "viewBox", "0 0 16 14", "fill-rule", "evenodd"], ["d", "M0 0h16v2H0zm0 4h16v2H0zm0 4h16v2H0zm0 4h16v2H0z"], [1, "w-100", "bx--col-sm-4", 3, "items", "viewMode", "gridItemsPerRow"], ["girdListCmp", ""], ["class", "bx--col-md-8 bx--col-xlg-8 bx--col-max-8 mb-2", 4, "ngFor", "ngForOf"], [3, "paginationSettings", "itemsPerPage", "pageChanged"], ["class", "bx--grid", 4, "ngIf"], [1, "bx--tag", "bx--tag--gray"], [3, "filters", "filtersValues", "hideFilters", "cancel", "filtersChange"], ["label", "Sort by", 3, "options", "selectedValue", "compositeKey", "select"], [1, "bx--col-md-8", "bx--col-xlg-8", "bx--col-max-8", "mb-2"], ["gridListItem", ""], ["aria-labelledby", "projects", 1, "bx--card", "ibm--card"], [1, "bx--card__card-overview", "ibm--card__overview", "ibm--card__projects"], [1, "ibm--card-overview__about"], [1, "ibm--card__project-title", "font-weight-normal", 3, "title", "click"], [1, "small--sm", "mb-1", "mt-2"], [1, "small--xs", "align", "align--center"], [1, "ibm--card__owner"], [1, "avatar", "avatar--xs", "mr-2", 3, "title", "ibmBackgroundAvatar"], [1, "d-inline-block"], [1, "ml-1", "d-inline-block"], [1, "ibm--card__collaborators", "small--xs", "align", "align--center"], [4, "ngIf"], [1, "bx--card-footer", "ibm--card__footer", "small--xs", "align"], [1, "align", "align-left"], [1, "font-weight-semibold", "text-uppercase", "text-decoration-none", 3, "click"], [1, "font-weight-semibold", "text-uppercase", "text-decoration-none", "ml-1", 3, "click"], [1, "align-right"], ["class", "btn--clean btn--clean--sm", "type", "button", "title", "Remove", 3, "click", 4, "ngIf"], ["class", "avatar avatar--xs", 3, "title", "ibmBackgroundAvatar", 4, "ngFor", "ngForOf"], [1, "avatar", "avatar--xs", 3, "title", "ibmBackgroundAvatar"], ["type", "button", "title", "Remove", 1, "btn--clean", "btn--clean--sm", 3, "click"], [1, "bx--grid"], [1, "bx--col-sm-4", "text-center"], [1, "display-1", "mt-3", "mb-2"]], template: function ProjectsListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ibm-default-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "My Projects");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProjectsListComponent_span_6_Template, 2, 1, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ibm-search-bar", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("searchChange", function ProjectsListComponent_Template_ibm_search_bar_searchChange_8_listener($event) { return ctx.onSearch($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsListComponent_Template_button_click_9_listener() { return ctx.toggleFilters(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "svg", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "path", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ProjectsListComponent_ibm_filters_12_Template, 1, 3, "ibm-filters", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsListComponent_Template_button_click_15_listener() { return ctx.showCreateNewProjectModal(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Start New Project ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "ibm-add-alt-icon", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ProjectsListComponent_ibm_bx_dropdown_20_Template, 1, 4, "ibm-bx-dropdown", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsListComponent_Template_button_click_21_listener() { return ctx.changeViewMode("grid"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "svg", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "path", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProjectsListComponent_Template_button_click_24_listener() { return ctx.changeViewMode("list"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "svg", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "path", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "ibm-grid-list-view", 25, 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ProjectsListComponent_div_30_Template, 36, 16, "div", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ibm-bx-pagination", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChanged", function ProjectsListComponent_Template_ibm_bx_pagination_pageChanged_33_listener($event) { return ctx.onPageChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ProjectsListComponent_div_34_Template, 7, 0, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pagination);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.showFilters);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showFilters);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortOptions);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.projects)("viewMode", ctx.viewMode)("gridItemsPerRow", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.projects);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("paginationSettings", ctx.pagination)("itemsPerPage", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.pagination == null ? null : ctx.pagination.totalItems) === 0);
            }
        }, directives: [_shared_common_utilities_default_header_default_header_component__WEBPACK_IMPORTED_MODULE_8__["DefaultHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_common_utilities_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_10__["SearchBarComponent"], _shared_icons_add_alt_icon_add_alt_icon_component__WEBPACK_IMPORTED_MODULE_11__["AddAltIconComponent"], _shared_common_utilities_grid_list_view_grid_list_view_component__WEBPACK_IMPORTED_MODULE_12__["GridListViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_carbon_design_bx_pagination_bx_pagination_component__WEBPACK_IMPORTED_MODULE_13__["BxPaginationComponent"], _shared_common_utilities_filters_filters_component__WEBPACK_IMPORTED_MODULE_14__["FiltersComponent"], _shared_carbon_design_bx_dropdown_bx_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["BxDropdownComponent"], _shared_common_utilities_avatar_directive__WEBPACK_IMPORTED_MODULE_16__["BackgroundAvatarDirective"], _shared_icons_delete_icon_delete_icon_component__WEBPACK_IMPORTED_MODULE_17__["DeleteIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".ibm--card__collaborators[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.ibm--card__collaborators[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.ibm--card__owner[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.ibm--card__projects[_ngcontent-%COMP%] {\n  text-align: left;\n  align-items: left;\n  justify-content: left;\n}\n.ibm--card__project-title[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxrQkFBQTtBQUZKO0FBR0k7RUFDRSxtQkFBQTtBQUROO0FBSUU7RUFDRSxvQkFBQTtBQUZKO0FBSUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUlFO0VBQ0UsZUFBQTtBQUZKIiwiZmlsZSI6InByb2plY3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL3N0eWxlcy9zZXR0aW5ncy9zZXR0aW5ncy5zY3NzJztcblxuLmlibS0tY2FyZCB7XG4gICZfX2NvbGxhYm9yYXRvcnMge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAuYXZhdGFyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgfVxuICB9XG4gICZfX293bmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxuICAmX19wcm9qZWN0cyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIH1cbiAgJl9fcHJvamVjdC10aXRsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iXX0= */"] });
    return ProjectsListComponent;
})();



/***/ }),

/***/ "4NX8":
/*!*******************************************************************!*\
  !*** ./src/app/modules/projects/workspace/workspace.component.ts ***!
  \*******************************************************************/
/*! exports provided: WorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceComponent", function() { return WorkspaceComponent; });
/* harmony import */ var _app_modules_retrosynthesis_retrosynthesis_wizard_retrosynthesis_wizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/modules/retrosynthesis/retrosynthesis-wizard/retrosynthesis-wizard.component */ "YEdr");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _reaction_wizard_reaction_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reaction-wizard/reaction-wizard.component */ "oUay");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services */ "dJ3e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_carbon_design__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/carbon-design */ "F8kB");
/* harmony import */ var _bitf_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitf/components */ "3lSO");
/* harmony import */ var _modules_projects_workspace_header_workspace_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/projects/workspace-header/workspace-header.component */ "KxUX");
/* harmony import */ var _modules_projects_ketcher_ketcher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/projects/ketcher/ketcher.component */ "cuns");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _smile_editor_smile_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./smile-editor/smile-editor.component */ "9wVm");
/* harmony import */ var _app_modules_projects_reactions_list_reactions_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/modules/projects/reactions-list/reactions-list.component */ "WBuC");
/* harmony import */ var _modules_molecules_molecules_list_molecules_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/molecules/molecules-list/molecules-list.component */ "ztgT");
// tslint:disable-next-line: max-line-length















const _c0 = ["ketcher"];
function WorkspaceComponent_ibm_smile_editor_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-smile-editor", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("smilesChanged", function WorkspaceComponent_ibm_smile_editor_22_Template_ibm_smile_editor_smilesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.onSmilesEditorUpdate($event); })("editorClosed", function WorkspaceComponent_ibm_smile_editor_22_Template_ibm_smile_editor_editorClosed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.closeSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("smiles", ctx_r2.smiles);
    }
}
const _c1 = function () { return ["selectAll", "actions"]; };
function WorkspaceComponent_ibm_reactions_list_28_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-reactions-list", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("smileChange", function WorkspaceComponent_ibm_reactions_list_28_Template_ibm_reactions_list_smileChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.onSmilesChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("projectId", ctx_r3.projectId)("isChild", true)("service", ctx_r3.apiService.reactionsCollection)("reactionListParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));
    }
}
const _c2 = function () { return ["add-to-workspace"]; };
const _c3 = function () { return ["createdOn"]; };
const _c4 = function () { return ["date"]; };
function WorkspaceComponent_ibm_molecules_list_34_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-molecules-list", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("smileChange", function WorkspaceComponent_ibm_molecules_list_34_Template_ibm_molecules_list_smileChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.onSmilesChange($event); })("search", function WorkspaceComponent_ibm_molecules_list_34_Template_ibm_molecules_list_search_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.loadMolecules($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("apiResponse", ctx_r4.moleculesApiResponse)("allowedActions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c2))("allowedSort", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c3))("allowedFilters", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c4))("emitSmiles", true);
    }
}
const _c5 = function () { return ["runPrediction", "getRetrosynthesis"]; };
let WorkspaceComponent = /*@__PURE__*/ (() => {
    class WorkspaceComponent {
        constructor(apiService, activatedRoute, ketcherDataService, modalService, router, toastMessagesService, loaderService) {
            this.apiService = apiService;
            this.activatedRoute = activatedRoute;
            this.ketcherDataService = ketcherDataService;
            this.modalService = modalService;
            this.router = router;
            this.toastMessagesService = toastMessagesService;
            this.loaderService = loaderService;
            this.sidebarMolecules = 'MOLECULES';
            this.sidebarReactions = 'REACTIONS';
            this.smilesEditor = 'SMILES_EDITOR';
            this.activePanel = '';
            this.initialisedPanels = [];
            this.moleculesApiResponse = null;
            this.sidebarDefaultItemsPerPage = 9;
            this.sidebarDefaultFirstPage = 0;
            this.disableActions = false;
            this.projectId = this.activatedRoute.snapshot.paramMap.get('projectId');
            this.projectName = this.activatedRoute.snapshot.paramMap.get('projectName');
        }
        ngOnInit() { }
        onSmilesChange(smiles) {
            this.closeSidebar();
            this.ketcher.addSmiles(smiles);
        }
        onSmilesEditorUpdate(smiles) {
            this.ketcher.setSmiles([smiles]);
            this.closeSidebar();
        }
        onAutoSave(ketcherEvent) {
            // console.log(ketcherEvent.mol);
        }
        openSidebar(name) {
            this.activePanel = name;
            this.initialisedPanels[name] = true;
        }
        closeSidebar() {
            this.activePanel = '';
            this.disableActions = false;
        }
        onSave() { }
        onAction(event) {
            if (!this.ketcher.smiles) {
                return;
            }
            this.loaderService.show();
            this.apiService.actions
                .validateSmiles(this.ketcher.smiles)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.loaderService.hide()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((response) => {
                return response.content.success;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
                switch (event) {
                    case 'runPrediction':
                        this.runPrediction();
                        break;
                    case 'getRetrosynthesis':
                        this.getRetrosyntesis();
                        break;
                }
            }))
                .subscribe();
        }
        getRetrosyntesis() {
            this.modalService.showModal(_app_modules_retrosynthesis_retrosynthesis_wizard_retrosynthesis_wizard_component__WEBPACK_IMPORTED_MODULE_0__["RetrosynthesisWizardComponent"], {
                className: 'ibm-modal-full-screen',
                data: {
                    product: this.ketcher.smiles,
                    projectId: this.projectId,
                    projectName: this.projectName,
                },
            });
        }
        runPrediction() {
            this.modalService.showModal(_reaction_wizard_reaction_wizard_component__WEBPACK_IMPORTED_MODULE_3__["ReactionWizardComponent"], {
                className: 'ibm-modal-full-screen ibm-modal-scrollable',
                data: {
                    onCreatePrediction: ({ aiModel }) => {
                        const predictionData = { reactants: this.ketcher.smiles, mol: this.ketcher.mol, aiModel };
                        this.apiService.predictions.predictionData = predictionData;
                        this.loaderService.show();
                        this.apiService.predictions
                            .predict(this.projectId, predictionData)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.loaderService.hide()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
                            this.loaderService.hide();
                            console.error(err);
                            this.toastMessagesService.showError('ERROR', 'Error on smiles validation service');
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(err);
                        }))
                            .subscribe(data => {
                            if (!data.metadata.uiMessages.errors.length) {
                                this.toastMessagesService.showSuccess('Prediction', 'Prediction started');
                                this.router.navigate([
                                    'projects',
                                    this.projectId,
                                    this.projectName,
                                    'outcomes',
                                    data.content.id,
                                ]);
                            }
                        });
                    },
                },
            });
        }
        loadMolecules(params) {
            params.id = this.projectId;
            params.relation = 'molecules';
            if (params.queryParams && params.queryParams.smiles) {
                this.loaderService.show();
                this.apiService.projects
                    .getRels(Object.assign(Object.assign({}, params), { path: `/search-via-smiles`, method: 'GET' }))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.loaderService.hide()))
                    .subscribe(response => (this.moleculesApiResponse = response));
            }
            else {
                this.apiService.projects
                    .getRels(params)
                    .subscribe(response => (this.moleculesApiResponse = response));
            }
        }
        openSmilesEditor() {
            this.smiles = this.ketcher.smiles;
            this.openSidebar(this.smilesEditor);
            this.disableActions = true;
        }
    }
    WorkspaceComponent.ɵfac = function WorkspaceComponent_Factory(t) { return new (t || WorkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_core_services__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_core_services__WEBPACK_IMPORTED_MODULE_5__["KetcherDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_shared_carbon_design__WEBPACK_IMPORTED_MODULE_7__["BxModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_shared_carbon_design__WEBPACK_IMPORTED_MODULE_7__["ToastMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitf_components__WEBPACK_IMPORTED_MODULE_8__["LoaderService"])); };
    WorkspaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WorkspaceComponent, selectors: [["ibm-workspace"]], viewQuery: function WorkspaceComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.ketcher = _t.first);
            }
        }, decls: 35, vars: 13, consts: [[1, "ibm--header", "ibm--header__fixed", 3, "actions", "disableActions", "action"], ["workspaceHeader", ""], [1, "workspace"], [1, "workspace_sidebar"], [1, "workspace_sidebar-btn", 3, "click"], ["width", "26px", "height", "17px", "viewBox", "0 0 26 17"], ["d", "M19.59,12.277c-1.941,1.13-3.88,2.264-5.814,3.404c-0.147,0.088-0.25,0.098-0.401,0.008\n          \t\tc-1.927-1.137-3.857-2.268-5.791-3.393c-0.176-0.102-0.231-0.215-0.23-0.408C7.36,9.602,7.356,7.313,7.367,5.026\n          \t\tc0-0.102,0.082-0.245,0.17-0.298c1.948-1.153,3.903-2.294,5.853-3.443c0.146-0.087,0.247-0.064,0.381,0.015\n          \t\tc1.949,1.149,3.901,2.295,5.857,3.434c0.143,0.082,0.158,0.178,0.158,0.312c-0.003,1.152-0.002,2.305-0.002,3.457\n          \t\tc0,1.144-0.004,2.288,0.004,3.431C19.791,12.102,19.734,12.191,19.59,12.277 M25.904,0.954c-0.146-0.219-0.43-0.304-0.674-0.201\n          \t\tc-0.088,0.036-0.17,0.089-0.25,0.14c-1.465,0.935-2.932,1.868-4.391,2.812c-0.188,0.122-0.32,0.127-0.514,0.012\n          \t\tc-2.031-1.2-4.07-2.389-6.102-3.59c-0.285-0.167-0.53-0.171-0.81-0.001c-0.627,0.38-1.265,0.745-1.898,1.116\n          \t\tC9.782,2.113,8.296,2.983,6.814,3.86C6.674,3.942,6.568,3.946,6.43,3.865C6.152,3.7,5.865,3.549,5.582,3.393\n          \t\tc-1.54-0.85-3.076-1.704-4.62-2.544c-0.159-0.086-0.339-0.125-0.52-0.113C0.21,0.76,0.055,0.925,0.018,1.166\n          \t\tc-0.043,0.273,0.06,0.458,0.355,0.62c1.883,1.041,3.764,2.083,5.65,3.118c0.149,0.082,0.205,0.167,0.204,0.337\n          \t\tC6.22,7.469,6.221,9.697,6.229,11.926c0,0.186-0.065,0.287-0.22,0.387c-1.851,1.176-3.697,2.357-5.543,3.539\n          \t\tc-0.103,0.065-0.209,0.131-0.297,0.211c-0.18,0.166-0.21,0.377-0.12,0.59C0.137,16.867,0.314,16.986,0.646,17\n          \t\tc0.072-0.034,0.22-0.086,0.349-0.167c1.848-1.179,3.696-2.358,5.536-3.548c0.198-0.128,0.333-0.135,0.538-0.014\n          \t\tc2.03,1.203,4.068,2.392,6.101,3.59c0.26,0.154,0.499,0.175,0.766,0.019c2.207-1.299,4.416-2.594,6.627-3.886\n          \t\tc0.254-0.148,0.36-0.35,0.359-0.633c-0.005-2.434-0.002-4.866-0.008-7.299c0-0.184,0.061-0.292,0.219-0.392\n          \t\tc1.49-0.945,2.975-1.897,4.46-2.849c0.095-0.06,0.193-0.123,0.271-0.203c0.166-0.185,0.183-0.46,0.039-0.664"], [1, "hidden"], ["width", "25px", "height", "22px", "viewBox", "0 0 25 22"], ["d", "M22.391,7.877c0-0.695-0.007-1.391,0.004-2.086c0.004-0.182-0.06-0.277-0.213-0.362\n          \tc-1.268-0.7-2.529-1.412-3.798-2.11c-0.096-0.045-0.206-0.047-0.304-0.005c-1.29,0.71-2.576,1.428-3.857,2.154\n          \tc-0.086,0.059-0.143,0.154-0.154,0.258c-0.009,1.424-0.01,2.847,0,4.271c0,0.082,0.07,0.2,0.142,0.24\n          \tc1.28,0.726,2.565,1.445,3.856,2.156c0.084,0.045,0.24,0.043,0.324-0.004c1.276-0.701,2.545-1.417,3.82-2.12\n          \tc0.146-0.08,0.184-0.174,0.184-0.33C22.387,9.252,22.391,8.564,22.391,7.877L22.391,7.877z M10.939,14.15L10.939,14.15\n          \tc-0.001-0.711,0.004-1.422-0.008-2.135c-0.009-0.104-0.064-0.199-0.149-0.26c-1.28-0.725-2.564-1.442-3.853-2.152\n          \tC6.833,9.558,6.723,9.556,6.625,9.598c-1.29,0.71-2.574,1.427-3.854,2.152c-0.087,0.06-0.144,0.154-0.155,0.26\n          \tc-0.01,1.415-0.005,2.83-0.01,4.244c0,0.153,0.061,0.23,0.19,0.303c1.273,0.705,2.54,1.42,3.816,2.121\n          \tc0.104,0.045,0.222,0.045,0.324-0.003c1.282-0.704,2.557-1.422,3.838-2.13c0.135-0.074,0.17-0.163,0.169-0.311\n          \tC10.935,15.54,10.939,14.846,10.939,14.15z M25,12.178c-0.287,0.487-0.613,0.528-1.012,0.125c-0.385-0.389-0.766-0.779-1.155-1.175\n          \tL20.197,12.6c-0.547,0.307-1.096,0.607-1.641,0.918c-0.228,0.129-0.436,0.123-0.666-0.006c-1.39-0.781-2.785-1.553-4.174-2.334\n          \tc-0.137-0.077-0.242-0.086-0.381-0.012c-0.388,0.207-0.78,0.403-1.176,0.595c-0.126,0.061-0.179,0.137-0.178,0.28\n          \tc0.004,1.448-0.001,2.897,0.007,4.345c0.01,0.109,0.059,0.213,0.136,0.291c0.395,0.413,0.802,0.814,1.203,1.221\n          \tc0.257,0.261,0.277,0.578,0.058,0.801c-0.224,0.226-0.534,0.209-0.795-0.053c-0.403-0.404-0.8-0.813-1.212-1.232l-1.57,0.873\n          \tc-0.426,0.238-0.849,0.482-1.28,0.711c-0.14,0.074-0.193,0.16-0.19,0.324c0.01,0.695,0.005,1.39,0.005,2.086\n          \tc0,0.23-0.085,0.416-0.291,0.527c-0.167,0.098-0.375,0.086-0.53-0.029c-0.177-0.12-0.244-0.295-0.242-0.506\n          \tc0.003-0.549,0-1.096,0-1.715c-0.345,0.287-0.67,0.28-1.032-0.011v0.653c0,0.367,0.002,0.736,0,1.104\n          \tc-0.001,0.328-0.216,0.564-0.511,0.566c-0.3,0.003-0.527-0.221-0.531-0.551c-0.009-0.695-0.01-1.391,0-2.086\n          \tc0.004-0.191-0.06-0.287-0.226-0.379c-0.934-0.51-1.86-1.035-2.805-1.563l-1.124,1.13c-0.428,0.43-0.68,0.422-1.052-0.035v-0.343\n          \tc0.419-0.442,0.825-0.899,1.262-1.323c0.21-0.188,0.324-0.462,0.308-0.744c-0.016-1.488-0.003-2.978-0.012-4.467\n          \tc-0.002-0.298,0.11-0.489,0.366-0.63c1.36-0.753,2.713-1.517,4.074-2.266c0.185-0.102,0.27-0.206,0.26-0.431\n          \tC6.236,7.826,6.248,7.343,6.25,6.86c0.002-0.332,0.21-0.562,0.507-0.571c0.305-0.01,0.535,0.224,0.539,0.57\n          \tc0.006,0.498,0.005,0.997-0.004,1.496c-0.003,0.164,0.04,0.262,0.194,0.348c1.282,0.707,2.556,1.428,3.838,2.135\n          \tc0.099,0.043,0.211,0.043,0.31,0.001c0.405-0.188,0.798-0.403,1.201-0.595c0.14-0.066,0.181-0.149,0.181-0.3\n          \tc-0.004-1.506,0.008-3.011-0.006-4.516c-0.003-0.366,0.131-0.587,0.45-0.759c1.011-0.544,2.005-1.114,3.011-1.666\n          \tc0.137-0.077,0.193-0.16,0.19-0.323c-0.011-0.703-0.004-1.407-0.003-2.11c0-0.233,0.094-0.412,0.307-0.516\n          \tc0.172-0.088,0.379-0.067,0.53,0.053c0.176,0.125,0.226,0.308,0.224,0.516c-0.004,0.54-0.002,1.079-0.002,1.687\n          \tc0.348-0.262,0.674-0.286,1.034,0.018V1.696V0.592c0.002-0.355,0.204-0.584,0.515-0.587c0.31-0.003,0.523,0.22,0.527,0.576\n          \tc0.007,0.687,0.008,1.375-0.002,2.062c-0.002,0.177,0.05,0.278,0.208,0.365c0.94,0.516,1.875,1.043,2.826,1.575\n          \tc0.378-0.381,0.75-0.757,1.124-1.132C24.379,3.02,24.626,3.028,25,3.488v0.343c-0.12,0.142-0.232,0.29-0.361,0.423\n          \tc-0.342,0.35-0.686,0.7-1.037,1.04c-0.115,0.103-0.176,0.251-0.168,0.404c0.006,1.366,0.014,2.732-0.004,4.097\n          \tc-0.005,0.33,0.086,0.56,0.324,0.787c0.434,0.414,0.833,0.866,1.246,1.302V12.178z"], [1, "workspace_canvas", "px-1"], [1, "workspace_canvas-header", "align", "align-right", "small--sm"], [1, "bx--btn", "bx--btn--ghost", "ml-2", 3, "click"], [3, "enableAutoSave", "autoSave"], ["ketcher", ""], [1, "workspace_side-content", "workspace_side-content-smiles-editor"], [3, "smiles", "smilesChanged", "editorClosed", 4, "ngIf"], [1, "workspace_side-content"], [1, "workspace_side-content-item"], [1, "workspace-close", 3, "click"], ["width", "10", "height", "10", "viewBox", "0 0 10 10", "fill-rule", "evenodd"], ["d", "M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z"], ["reactionType", "reactions-collection", "header", "Reactions Collection", "actionsToExclude", "['delete','view']", 3, "projectId", "isChild", "service", "reactionListParams", "smileChange", 4, "ngIf"], ["header", "Molecules", 3, "apiResponse", "allowedActions", "allowedSort", "allowedFilters", "emitSmiles", "smileChange", "search", 4, "ngIf"], [3, "smiles", "smilesChanged", "editorClosed"], ["reactionType", "reactions-collection", "header", "Reactions Collection", "actionsToExclude", "['delete','view']", 3, "projectId", "isChild", "service", "reactionListParams", "smileChange"], ["header", "Molecules", 3, "apiResponse", "allowedActions", "allowedSort", "allowedFilters", "emitSmiles", "smileChange", "search"]], template: function WorkspaceComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ibm-workspace-header", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("action", function WorkspaceComponent_Template_ibm_workspace_header_action_0_listener($event) { return ctx.onAction($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ul");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkspaceComponent_Template_button_click_6_listener() { return ctx.openSidebar(ctx.sidebarReactions); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "svg", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "path", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Reactions collection ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkspaceComponent_Template_button_click_11_listener() { return ctx.openSidebar(ctx.sidebarMolecules); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "svg", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "path", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Molecules collection ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkspaceComponent_Template_button_click_17_listener() { return ctx.openSmilesEditor(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Use The Smiles String Editor ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ibm-ketcher", 13, 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("autoSave", function WorkspaceComponent_Template_ibm_ketcher_autoSave_19_listener($event) { return ctx.onAutoSave($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, WorkspaceComponent_ibm_smile_editor_22_Template, 1, 1, "ibm-smile-editor", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkspaceComponent_Template_button_click_25_listener() { return ctx.closeSidebar(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "svg", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "path", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, WorkspaceComponent_ibm_reactions_list_28_Template, 1, 5, "ibm-reactions-list", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkspaceComponent_Template_button_click_31_listener() { return ctx.closeSidebar(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "svg", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "path", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, WorkspaceComponent_ibm_molecules_list_34_Template, 1, 8, "ibm-molecules-list", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("actions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c5))("disableActions", ctx.disableActions);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("enableAutoSave", false);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sidebar-opened", ctx.activePanel == ctx.smilesEditor);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.initialisedPanels[ctx.smilesEditor]);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sidebar-opened", ctx.activePanel == ctx.sidebarReactions);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.initialisedPanels[ctx.sidebarReactions]);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("sidebar-opened", ctx.activePanel == ctx.sidebarMolecules);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.initialisedPanels[ctx.sidebarMolecules]);
            }
        }, directives: [_modules_projects_workspace_header_workspace_header_component__WEBPACK_IMPORTED_MODULE_9__["WorkspaceHeaderComponent"], _modules_projects_ketcher_ketcher_component__WEBPACK_IMPORTED_MODULE_10__["KetcherComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _smile_editor_smile_editor_component__WEBPACK_IMPORTED_MODULE_12__["SmileEditorComponent"], _app_modules_projects_reactions_list_reactions_list_component__WEBPACK_IMPORTED_MODULE_13__["ReactionsListComponent"], _modules_molecules_molecules_list_molecules_list_component__WEBPACK_IMPORTED_MODULE_14__["MoleculesListComponent"]], styles: [".workspace_smile-editor[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 55px;\n  z-index: 100;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.workspace_smile-editor-opened[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3dvcmtzcGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtBQUVKIiwiZmlsZSI6IndvcmtzcGFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3Jrc3BhY2Vfc21pbGUtZWRpdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU1cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgJi1vcGVuZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iXX0= */"] });
    return WorkspaceComponent;
})();



/***/ }),

/***/ "7aeT":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/projects/prediction-outcomes/prediction-outcomes.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PredictionOutcomesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionOutcomesComponent", function() { return PredictionOutcomesComponent; });
/* harmony import */ var _prediction_outcomes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prediction-outcomes.enum */ "0z5/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _bitf_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitf/components */ "3lSO");
/* harmony import */ var _app_shared_carbon_design__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/carbon-design */ "F8kB");
/* harmony import */ var _modules_projects_workspace_header_workspace_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/projects/workspace-header/workspace-header.component */ "KxUX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modules_projects_prediction_outcome_prediction_outcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/projects/prediction-outcome/prediction-outcome.component */ "y8E/");









const _c0 = ["workspaceHeader"];
function PredictionOutcomesComponent_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PredictionOutcomesComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onGenerateMoreOutcomes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Generate More Outcomes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.outcomes && ctx_r1.outcomes.length > 1);
    }
}
function PredictionOutcomesComponent_div_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ibm-prediction-outcome", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const outcome_r5 = ctx.$implicit;
        const i_r6 = ctx.index;
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("outcome", outcome_r5)("aiModel", ctx_r2.predictionTask.aiModel)("index", i_r6)("projectId", ctx_r2.projectId);
    }
}
const _c1 = function () { return ["generateMoreOutcomes"]; };
var EPredictionType = /*@__PURE__*/ (function (EPredictionType) {
    EPredictionType["pr"] = "PR";
    EPredictionType["prb"] = "prb";
    return EPredictionType;
})({});
let PredictionOutcomesComponent = /*@__PURE__*/ (() => {
    class PredictionOutcomesComponent {
        constructor(activatedRoute, apiService, loaderService, toastMessagesService, router) {
            this.activatedRoute = activatedRoute;
            this.apiService = apiService;
            this.loaderService = loaderService;
            this.toastMessagesService = toastMessagesService;
            this.router = router;
            this.outcomes = [];
            this.mode = _prediction_outcomes_enum__WEBPACK_IMPORTED_MODULE_0__["EOutcomesMode"].PREDICTION;
            this.taskId = this.activatedRoute.snapshot.paramMap.get('taskId');
            this.projectId = this.activatedRoute.snapshot.paramMap.get('projectId');
            this.projectName = this.activatedRoute.snapshot.paramMap.get('projectName');
            this.mode = this.activatedRoute.snapshot.data['mode'] || this.mode;
        }
        ngOnInit() {
            this.loaderService.show();
            // NOTE: don't waste the first call since the responce can't be ready
            const delay = this.mode === _prediction_outcomes_enum__WEBPACK_IMPORTED_MODULE_0__["EOutcomesMode"].PREDICTION ? 3000 : 0;
            setTimeout(() => {
                this.getOutcomes(this.taskId, EPredictionType.pr);
            }, delay);
        }
        onGenerateMoreOutcomes() {
            this.loaderService.show();
            this.apiService.predictions
                .predict(this.projectId, this.predictionTask.request, this.taskId, true)
                .subscribe(data => {
                this.toastMessagesService.showSuccess('Prediction', 'Prediction started');
                this.getOutcomes(data.content.id, EPredictionType.prb);
            }, () => {
                // NOTE: the API will provide the error
                //  this.toastMessagesService
                // .showError('Prediction', 'Error calling the prediction server');
                this.loaderService.hide();
            });
        }
        getOutcomes(taskId, predictionType) {
            this.apiService.predictions.getOutcomes(taskId).subscribe(data => {
                this.predictionTask = data.content;
                this.outcomes = data.content.attempts.sort((a, b) => a.firstAttempt ? -1 : b.firstAttempt ? 1 : 0);
                if (predictionType === EPredictionType.pr) {
                    this.loaderService.hide();
                }
                if (data.content.status === 'SUCCESS') {
                    if (predictionType === EPredictionType.prb) {
                        this.loaderService.hide();
                    }
                    if (this.mode === _prediction_outcomes_enum__WEBPACK_IMPORTED_MODULE_0__["EOutcomesMode"].PREDICTION) {
                        this.toastMessagesService.showSuccess('Outcomes', 'New outcomes are ready');
                    }
                }
            }, error => {
                this.toastMessagesService.showError('Outcomes', 'Error retrieving outcomes');
                this.loaderService.hide();
                this.router.navigate([
                    'projects',
                    this.projectId,
                    this.projectName,
                    'reactions-collection',
                ]);
            });
        }
    }
    PredictionOutcomesComponent.ɵfac = function PredictionOutcomesComponent_Factory(t) { return new (t || PredictionOutcomesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bitf_components__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_carbon_design__WEBPACK_IMPORTED_MODULE_5__["ToastMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    PredictionOutcomesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PredictionOutcomesComponent, selectors: [["ibm-prediction-outcomes"]], viewQuery: function PredictionOutcomesComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.workspaceHeader = _t.first);
            }
        }, decls: 5, vars: 5, consts: [[1, "ibm--body__fixed", 3, "useBack", "actions"], ["workspaceHeader", ""], [1, "ibm--outcomes__generate-more"], ["class", "bx--btn bx--btn--primary", "type", "button", 3, "disabled", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "bx--btn", "bx--btn--primary", 3, "disabled", "click"], [3, "outcome", "aiModel", "index", "projectId"]], template: function PredictionOutcomesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ibm-workspace-header", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PredictionOutcomesComponent_button_3_Template, 2, 1, "button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PredictionOutcomesComponent_div_4_Template, 2, 4, "div", 4);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("useBack", true)("actions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.predictionTask && ctx.predictionTask.canGenerateOutcomes);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.outcomes);
            }
        }, directives: [_modules_projects_workspace_header_workspace_header_component__WEBPACK_IMPORTED_MODULE_6__["WorkspaceHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _modules_projects_prediction_outcome_prediction_outcome_component__WEBPACK_IMPORTED_MODULE_8__["PredictionOutcomeComponent"]], styles: [".ibm--outcomes__generate-more[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3ByZWRpY3Rpb24tb3V0Y29tZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFBSiIsImZpbGUiOiJwcmVkaWN0aW9uLW91dGNvbWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlibS0tb3V0Y29tZXMge1xuICAmX19nZW5lcmF0ZS1tb3JlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
    return PredictionOutcomesComponent;
})();



/***/ }),

/***/ "943x":
/*!*****************************************************************!*\
  !*** ./src/app/modules/projects/projects/projects.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared_carbon_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/carbon-design */ "F8kB");





let ProjectsComponent = /*@__PURE__*/ (() => {
    class ProjectsComponent {
        constructor(route, router, appSessionService, apiService, toastMessagesService) {
            this.route = route;
            this.router = router;
            this.appSessionService = appSessionService;
            this.apiService = apiService;
            this.toastMessagesService = toastMessagesService;
        }
        ngOnInit() {
            this.route.children[0].params.subscribe(this.loadProject.bind(this));
            this.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                    this.route.children[0].params.subscribe(this.loadProject.bind(this));
                }
            });
        }
        loadProject(routeParams) {
            const projectId = routeParams.projectId;
            if (!projectId) {
                return;
            }
            if (!this.appSessionService.currentProject ||
                this.appSessionService.currentProject.id !== routeParams.projectId) {
                this.apiService.projects
                    .getById({ id: projectId, embed: ['collaborators'] })
                    .subscribe((response) => {
                    this.appSessionService.currentProject = response.content;
                }, () => {
                    this.toastMessagesService.showError('Error', 'Error on project loading');
                });
            }
        }
        ngOnDestroy() {
            this.appSessionService.currentProject = null;
        }
    }
    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_carbon_design__WEBPACK_IMPORTED_MODULE_3__["ToastMessagesService"])); };
    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["ibm-projects"]], decls: 1, vars: 0, template: function ProjectsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ProjectsComponent;
})();



/***/ }),

/***/ "9wVm":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/projects/workspace/smile-editor/smile-editor.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SmileEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmileEditorComponent", function() { return SmileEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _app_shared_carbon_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/carbon-design */ "F8kB");
/* harmony import */ var _shared_common_utilities_clipboard_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common-utilities/clipboard.directive */ "ieAw");






let SmileEditorComponent = /*@__PURE__*/ (() => {
    class SmileEditorComponent {
        constructor(fb, apiService, toastMessagesService) {
            this.fb = fb;
            this.apiService = apiService;
            this.toastMessagesService = toastMessagesService;
            this.smilesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.editorClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        set smiles(smiles) {
            if (!this.smilesForm) {
                this.initForm();
            }
            this.smilesForm.patchValue({ smiles });
        }
        get smiles() {
            return this.smilesForm.value.smiles;
        }
        ngOnInit() { }
        initForm() {
            this.smilesForm = this.fb.group({
                smiles: null,
            });
        }
        backToKetcher() {
            this.editorClosed.emit();
        }
        sendToKetcher() {
            this.apiService.actions.validateSmiles(this.smilesForm.value.smiles).subscribe((response) => {
                if (response.content.success) {
                    this.smilesChanged.emit(this.smilesForm.value.smiles);
                }
                else {
                    // NOTE this is triggered by the API
                    // this.toastMessagesService.showError('SMILES', 'Smiles not valid');
                }
            }, error => {
                this.toastMessagesService.showError('ERROR', 'Error on smiles validation service');
            });
        }
        validateSmiles() {
            this.apiService.actions.validateSmiles(this.smilesForm.value.smiles).subscribe((response) => {
                if (response.content.success) {
                    this.toastMessagesService.showSuccess('SMILES', 'Smiles is valid');
                }
                else {
                    // NOTE this is triggered by the API
                    //  this.toastMessagesService.showError('SMILES', 'Smiles not valid');
                }
            }, error => {
                this.toastMessagesService.showError('ERROR', 'Error on smiles validation service');
            });
        }
    }
    SmileEditorComponent.ɵfac = function SmileEditorComponent_Factory(t) { return new (t || SmileEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_carbon_design__WEBPACK_IMPORTED_MODULE_3__["ToastMessagesService"])); };
    SmileEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmileEditorComponent, selectors: [["ibm-smile-editor"]], inputs: { smiles: "smiles" }, outputs: { smilesChanged: "smilesChanged", editorClosed: "editorClosed" }, decls: 21, vars: 2, consts: [[1, "row", "workspace_side-content-smiles-editor-panel"], [1, "bx--col-xlg-16", "h-100"], [1, "d-flex", "justify-content-between"], [1, "bx--btn", "bx--btn--ghost", 3, "click"], ["width", "16", "height", "14", "viewBox", "0 0 16 14", 1, "bx--btn__icon"], ["d", "M4.044 8.003l4.09 3.905-1.374 1.453-6.763-6.356L6.759.639 8.135 2.09 4.043 6.003h11.954v2H4.044z"], [1, "row", "workspace_side-content-smiles-editor-panel-form", "h-100"], [1, "h-100", 3, "formGroup"], ["formControlName", "smiles", 1, "workspace_side-content-smiles-editor-panel-form-textarea", "ibm--textarea", "h-100"], ["type", "button", 1, "bx--btn", "bx--btn--ghost", 3, "ibmClipboard"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", 1, "bx--btn__icon", "ml-0"], ["d", "M1 10H0V2C0 .9.9 0 2 0h8v1H2c-.6 0-1 .5-1 1v8z"], ["d", "M11 4.2V8h3.8L11 4.2zM15 9h-4c-.6 0-1-.4-1-1V4H4.5c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h10c.3 0 .5-.2.5-.5V9zm-4-6c.1 0 .3.1.4.1l4.5 4.5c0 .1.1.3.1.4v6.5c0 .8-.7 1.5-1.5 1.5h-10c-.8 0-1.5-.7-1.5-1.5v-10C3 3.7 3.7 3 4.5 3H11z"], [1, "workspace_sticky"], [1, "row", "justify-content-end"], [1, "bx--col-xlg-16"]], template: function SmileEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SmileEditorComponent_Template_button_click_3_listener() { return ctx.backToKetcher(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Back To The Ketcher Editor ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SmileEditorComponent_Template_button_click_7_listener() { return ctx.sendToKetcher(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Load in ketcher");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SmileEditorComponent_Template_button_click_19_listener() { return ctx.validateSmiles(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Validate SMILES");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.smilesForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ibmClipboard", ctx.smiles);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_common_utilities_clipboard_directive__WEBPACK_IMPORTED_MODULE_4__["ClipboardDirective"]], styles: [".workspace_sticky[_ngcontent-%COMP%] {\n  padding: 0 5rem;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background-color: #f4f4f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NtaWxlLWVkaXRvci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYXJib24tY29tcG9uZW50cy9zY3NzL2dsb2JhbHMvc2Nzcy92ZW5kb3IvQGNhcmJvbi9lbGVtZW50cy9zY3NzL3RoZW1lcy9nZW5lcmF0ZWQvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQ3FDZ0I7QUR0Q2xCIiwiZmlsZSI6InNtaWxlLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvc3R5bGVzL3NldHRpbmdzL3NldHRpbmdzLnNjc3MnO1xuXG4ud29ya3NwYWNlX3N0aWNreSB7XG4gIHBhZGRpbmc6IDAgNXJlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdWktYmFja2dyb3VuZDtcbn1cbiIsIi8vIENvZGUgZ2VuZXJhdGVkIGJ5IEBjYXJib24vdGhlbWVzLiBETyBOT1QgRURJVC5cbi8vXG4vLyBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTgsIDIwMTlcbi8vXG4vLyBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUtMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vL1xuXG5AaW1wb3J0ICcuL3RoZW1lcyc7XG5cbi8vLyBEZWZpbmUgdGhlbWUgdmFyaWFibGVzIGZyb20gYSBtYXAgb2YgdG9rZW5zXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAcGFyYW0ge01hcH0gJHRoZW1lIFskY2FyYm9uLS10aGVtZV0gLSBNYXAgb2YgdGhlbWUgdG9rZW5zXG4vLy8gQHBhcmFtIHtCb29sfSAkZW1pdC1jdXN0b20tcHJvcGVydGllcyBbZmFsc2VdIC0gT3V0cHV0IENTUyBDdXN0b20gUHJvcGVydGllcyBmb3IgdGhlbWUgdG9rZW5zXG4vLy8gQGNvbnRlbnQgUGFzcyBpbiB5b3VyIGN1c3RvbSBkZWNsYXJhdGlvbiBibG9ja3MgdG8gYmUgdXNlZCBhZnRlciB0aGUgdG9rZW4gbWFwcyBzZXQgdGhlbWluZyB2YXJpYWJsZXMuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzXG4vLy8gICAvLyBEZWZhdWx0IHVzYWdlXG4vLy8gICBAaW5jbHVkZSBjYXJib24tLXRoZW1lKCk7XG4vLy9cbi8vLyAgIC8vIEFsdGVybmF0ZSBzdHlsaW5nIChub3Qgd2hpdGUgdGhlbWUpXG4vLy8gICBAaW5jbHVkZSBjYXJib24tLXRoZW1lKCRjYXJib24tLXRoZW1lLS1nOTApIHtcbi8vLyAgICAgLy8gZGVjbGFyYXRpb25zLi4uXG4vLy8gICB9XG4vLy9cbi8vLyAgIC8vIElubGluZSBzdHlsaW5nXG4vLy8gICBAaW5jbHVkZSBjYXJib24tLXRoZW1lKCRjYXJib24tLXRoZW1lLS1nOTApIHtcbi8vLyAgICAgLm15LWRhcmstdGhlbWUge1xuLy8vICAgICAgIC8vIGRlY2xhcmF0aW9ucy4uLlxuLy8vICAgICB9XG4vLy8gICB9XG4vLy9cbi8vLyBAZ3JvdXAgQGNhcmJvbi90aGVtZXNcbkBtaXhpbiBjYXJib24tLXRoZW1lKFxuICAkdGhlbWU6ICRjYXJib24tLXRoZW1lLFxuICAkZW1pdC1jdXN0b20tcHJvcGVydGllczogZmFsc2UsXG4gICRlbWl0LWRpZmZlcmVuY2U6IGZhbHNlXG4pIHtcbiAgJHBhcmVudC1jYXJib24tdGhlbWU6ICRjYXJib24tLXRoZW1lO1xuICAkY2FyYm9uLS10aGVtZTogJHRoZW1lICFnbG9iYWw7XG4gICRpbnRlcmFjdGl2ZS0wMTogbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wMScpICFnbG9iYWw7XG4gICRpbnRlcmFjdGl2ZS0wMjogbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wMicpICFnbG9iYWw7XG4gICRpbnRlcmFjdGl2ZS0wMzogbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wMycpICFnbG9iYWw7XG4gICRpbnRlcmFjdGl2ZS0wNDogbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wNCcpICFnbG9iYWw7XG4gICR1aS1iYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ3VpLWJhY2tncm91bmQnKSAhZ2xvYmFsO1xuICAkdWktMDE6IG1hcC1nZXQoJHRoZW1lLCAndWktMDEnKSAhZ2xvYmFsO1xuICAkdWktMDI6IG1hcC1nZXQoJHRoZW1lLCAndWktMDInKSAhZ2xvYmFsO1xuICAkdWktMDM6IG1hcC1nZXQoJHRoZW1lLCAndWktMDMnKSAhZ2xvYmFsO1xuICAkdWktMDQ6IG1hcC1nZXQoJHRoZW1lLCAndWktMDQnKSAhZ2xvYmFsO1xuICAkdWktMDU6IG1hcC1nZXQoJHRoZW1lLCAndWktMDUnKSAhZ2xvYmFsO1xuICAkdGV4dC0wMTogbWFwLWdldCgkdGhlbWUsICd0ZXh0LTAxJykgIWdsb2JhbDtcbiAgJHRleHQtMDI6IG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wMicpICFnbG9iYWw7XG4gICR0ZXh0LTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtMDMnKSAhZ2xvYmFsO1xuICAkdGV4dC0wNDogbWFwLWdldCgkdGhlbWUsICd0ZXh0LTA0JykgIWdsb2JhbDtcbiAgJHRleHQtMDU6IG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wNScpICFnbG9iYWw7XG4gICR0ZXh0LWVycm9yOiBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtZXJyb3InKSAhZ2xvYmFsO1xuICAkaWNvbi0wMTogbWFwLWdldCgkdGhlbWUsICdpY29uLTAxJykgIWdsb2JhbDtcbiAgJGljb24tMDI6IG1hcC1nZXQoJHRoZW1lLCAnaWNvbi0wMicpICFnbG9iYWw7XG4gICRpY29uLTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tMDMnKSAhZ2xvYmFsO1xuICAkbGluay0wMTogbWFwLWdldCgkdGhlbWUsICdsaW5rLTAxJykgIWdsb2JhbDtcbiAgJGxpbmstMDI6IG1hcC1nZXQoJHRoZW1lLCAnbGluay0wMicpICFnbG9iYWw7XG4gICRpbnZlcnNlLWxpbms6IG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1saW5rJykgIWdsb2JhbDtcbiAgJGZpZWxkLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZpZWxkLTAxJykgIWdsb2JhbDtcbiAgJGZpZWxkLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZpZWxkLTAyJykgIWdsb2JhbDtcbiAgJGludmVyc2UtMDE6IG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS0wMScpICFnbG9iYWw7XG4gICRpbnZlcnNlLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtMDInKSAhZ2xvYmFsO1xuICAkc3VwcG9ydC0wMTogbWFwLWdldCgkdGhlbWUsICdzdXBwb3J0LTAxJykgIWdsb2JhbDtcbiAgJHN1cHBvcnQtMDI6IG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wMicpICFnbG9iYWw7XG4gICRzdXBwb3J0LTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ3N1cHBvcnQtMDMnKSAhZ2xvYmFsO1xuICAkc3VwcG9ydC0wNDogbWFwLWdldCgkdGhlbWUsICdzdXBwb3J0LTA0JykgIWdsb2JhbDtcbiAgJGludmVyc2Utc3VwcG9ydC0wMTogbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDEnKSAhZ2xvYmFsO1xuICAkaW52ZXJzZS1zdXBwb3J0LTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2Utc3VwcG9ydC0wMicpICFnbG9iYWw7XG4gICRpbnZlcnNlLXN1cHBvcnQtMDM6IG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1zdXBwb3J0LTAzJykgIWdsb2JhbDtcbiAgJGludmVyc2Utc3VwcG9ydC0wNDogbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDQnKSAhZ2xvYmFsO1xuICAkb3ZlcmxheS0wMTogbWFwLWdldCgkdGhlbWUsICdvdmVybGF5LTAxJykgIWdsb2JhbDtcbiAgJGRhbmdlci0wMTogbWFwLWdldCgkdGhlbWUsICdkYW5nZXItMDEnKSAhZ2xvYmFsO1xuICAkZGFuZ2VyLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2Rhbmdlci0wMicpICFnbG9iYWw7XG4gICRmb2N1czogbWFwLWdldCgkdGhlbWUsICdmb2N1cycpICFnbG9iYWw7XG4gICRpbnZlcnNlLWZvY3VzLXVpOiBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtZm9jdXMtdWknKSAhZ2xvYmFsO1xuICAkaG92ZXItcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsICdob3Zlci1wcmltYXJ5JykgIWdsb2JhbDtcbiAgJGFjdGl2ZS1wcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS1wcmltYXJ5JykgIWdsb2JhbDtcbiAgJGhvdmVyLXByaW1hcnktdGV4dDogbWFwLWdldCgkdGhlbWUsICdob3Zlci1wcmltYXJ5LXRleHQnKSAhZ2xvYmFsO1xuICAkaG92ZXItc2Vjb25kYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXNlY29uZGFyeScpICFnbG9iYWw7XG4gICRhY3RpdmUtc2Vjb25kYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS1zZWNvbmRhcnknKSAhZ2xvYmFsO1xuICAkaG92ZXItdGVydGlhcnk6IG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItdGVydGlhcnknKSAhZ2xvYmFsO1xuICAkYWN0aXZlLXRlcnRpYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS10ZXJ0aWFyeScpICFnbG9iYWw7XG4gICRob3Zlci11aTogbWFwLWdldCgkdGhlbWUsICdob3Zlci11aScpICFnbG9iYWw7XG4gICRob3Zlci1saWdodC11aTogbWFwLWdldCgkdGhlbWUsICdob3Zlci1saWdodC11aScpICFnbG9iYWw7XG4gICRob3Zlci1zZWxlY3RlZC11aTogbWFwLWdldCgkdGhlbWUsICdob3Zlci1zZWxlY3RlZC11aScpICFnbG9iYWw7XG4gICRhY3RpdmUtdWk6IG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLXVpJykgIWdsb2JhbDtcbiAgJGFjdGl2ZS1saWdodC11aTogbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtbGlnaHQtdWknKSAhZ2xvYmFsO1xuICAkc2VsZWN0ZWQtdWk6IG1hcC1nZXQoJHRoZW1lLCAnc2VsZWN0ZWQtdWknKSAhZ2xvYmFsO1xuICAkc2VsZWN0ZWQtbGlnaHQtdWk6IG1hcC1nZXQoJHRoZW1lLCAnc2VsZWN0ZWQtbGlnaHQtdWknKSAhZ2xvYmFsO1xuICAkaW52ZXJzZS1ob3Zlci11aTogbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLWhvdmVyLXVpJykgIWdsb2JhbDtcbiAgJGhvdmVyLWRhbmdlcjogbWFwLWdldCgkdGhlbWUsICdob3Zlci1kYW5nZXInKSAhZ2xvYmFsO1xuICAkYWN0aXZlLWRhbmdlcjogbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtZGFuZ2VyJykgIWdsb2JhbDtcbiAgJGhvdmVyLXJvdzogbWFwLWdldCgkdGhlbWUsICdob3Zlci1yb3cnKSAhZ2xvYmFsO1xuICAkdmlzaXRlZC1saW5rOiBtYXAtZ2V0KCR0aGVtZSwgJ3Zpc2l0ZWQtbGluaycpICFnbG9iYWw7XG4gICRkaXNhYmxlZC0wMTogbWFwLWdldCgkdGhlbWUsICdkaXNhYmxlZC0wMScpICFnbG9iYWw7XG4gICRkaXNhYmxlZC0wMjogbWFwLWdldCgkdGhlbWUsICdkaXNhYmxlZC0wMicpICFnbG9iYWw7XG4gICRkaXNhYmxlZC0wMzogbWFwLWdldCgkdGhlbWUsICdkaXNhYmxlZC0wMycpICFnbG9iYWw7XG4gICRoaWdobGlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnaGlnaGxpZ2h0JykgIWdsb2JhbDtcbiAgJGRlY29yYXRpdmUtMDE6IG1hcC1nZXQoJHRoZW1lLCAnZGVjb3JhdGl2ZS0wMScpICFnbG9iYWw7XG4gICRidXR0b24tc2VwYXJhdG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2J1dHRvbi1zZXBhcmF0b3InKSAhZ2xvYmFsO1xuICAkc2tlbGV0b24tMDE6IG1hcC1nZXQoJHRoZW1lLCAnc2tlbGV0b24tMDEnKSAhZ2xvYmFsO1xuICAkc2tlbGV0b24tMDI6IG1hcC1nZXQoJHRoZW1lLCAnc2tlbGV0b24tMDInKSAhZ2xvYmFsO1xuICAkYnJhbmQtMDE6IG1hcC1nZXQoJHRoZW1lLCAnYnJhbmQtMDEnKSAhZ2xvYmFsO1xuICAkYnJhbmQtMDI6IG1hcC1nZXQoJHRoZW1lLCAnYnJhbmQtMDInKSAhZ2xvYmFsO1xuICAkYnJhbmQtMDM6IG1hcC1nZXQoJHRoZW1lLCAnYnJhbmQtMDMnKSAhZ2xvYmFsO1xuICAkYWN0aXZlLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS0wMScpICFnbG9iYWw7XG4gICRob3Zlci1maWVsZDogbWFwLWdldCgkdGhlbWUsICdob3Zlci1maWVsZCcpICFnbG9iYWw7XG4gICRkYW5nZXI6IG1hcC1nZXQoJHRoZW1lLCAnZGFuZ2VyJykgIWdsb2JhbDtcbiAgJGNhcHRpb24tMDE6IG1hcC1nZXQoJHRoZW1lLCAnY2FwdGlvbi0wMScpICFnbG9iYWw7XG4gICRsYWJlbC0wMTogbWFwLWdldCgkdGhlbWUsICdsYWJlbC0wMScpICFnbG9iYWw7XG4gICRoZWxwZXItdGV4dC0wMTogbWFwLWdldCgkdGhlbWUsICdoZWxwZXItdGV4dC0wMScpICFnbG9iYWw7XG4gICRib2R5LXNob3J0LTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvZHktc2hvcnQtMDEnKSAhZ2xvYmFsO1xuICAkYm9keS1sb25nLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvZHktbG9uZy0wMScpICFnbG9iYWw7XG4gICRib2R5LXNob3J0LTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvZHktc2hvcnQtMDInKSAhZ2xvYmFsO1xuICAkYm9keS1sb25nLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvZHktbG9uZy0wMicpICFnbG9iYWw7XG4gICRjb2RlLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvZGUtMDEnKSAhZ2xvYmFsO1xuICAkY29kZS0wMjogbWFwLWdldCgkdGhlbWUsICdjb2RlLTAyJykgIWdsb2JhbDtcbiAgJGhlYWRpbmctMDE6IG1hcC1nZXQoJHRoZW1lLCAnaGVhZGluZy0wMScpICFnbG9iYWw7XG4gICRwcm9kdWN0aXZlLWhlYWRpbmctMDE6IG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTAxJykgIWdsb2JhbDtcbiAgJGhlYWRpbmctMDI6IG1hcC1nZXQoJHRoZW1lLCAnaGVhZGluZy0wMicpICFnbG9iYWw7XG4gICRwcm9kdWN0aXZlLWhlYWRpbmctMDI6IG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTAyJykgIWdsb2JhbDtcbiAgJHByb2R1Y3RpdmUtaGVhZGluZy0wMzogbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDMnKSAhZ2xvYmFsO1xuICAkcHJvZHVjdGl2ZS1oZWFkaW5nLTA0OiBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNCcpICFnbG9iYWw7XG4gICRwcm9kdWN0aXZlLWhlYWRpbmctMDU6IG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTA1JykgIWdsb2JhbDtcbiAgJHByb2R1Y3RpdmUtaGVhZGluZy0wNjogbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDYnKSAhZ2xvYmFsO1xuICAkcHJvZHVjdGl2ZS1oZWFkaW5nLTA3OiBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNycpICFnbG9iYWw7XG4gICRleHByZXNzaXZlLWhlYWRpbmctMDE6IG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1oZWFkaW5nLTAxJykgIWdsb2JhbDtcbiAgJGV4cHJlc3NpdmUtaGVhZGluZy0wMjogbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLWhlYWRpbmctMDInKSAhZ2xvYmFsO1xuICAkZXhwcmVzc2l2ZS1oZWFkaW5nLTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtaGVhZGluZy0wMycpICFnbG9iYWw7XG4gICRleHByZXNzaXZlLWhlYWRpbmctMDQ6IG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1oZWFkaW5nLTA0JykgIWdsb2JhbDtcbiAgJGV4cHJlc3NpdmUtaGVhZGluZy0wNTogbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLWhlYWRpbmctMDUnKSAhZ2xvYmFsO1xuICAkZXhwcmVzc2l2ZS1oZWFkaW5nLTA2OiBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtaGVhZGluZy0wNicpICFnbG9iYWw7XG4gICRleHByZXNzaXZlLXBhcmFncmFwaC0wMTogbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLXBhcmFncmFwaC0wMScpICFnbG9iYWw7XG4gICRxdW90YXRpb24tMDE6IG1hcC1nZXQoJHRoZW1lLCAncXVvdGF0aW9uLTAxJykgIWdsb2JhbDtcbiAgJHF1b3RhdGlvbi0wMjogbWFwLWdldCgkdGhlbWUsICdxdW90YXRpb24tMDInKSAhZ2xvYmFsO1xuICAkZGlzcGxheS0wMTogbWFwLWdldCgkdGhlbWUsICdkaXNwbGF5LTAxJykgIWdsb2JhbDtcbiAgJGRpc3BsYXktMDI6IG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheS0wMicpICFnbG9iYWw7XG4gICRkaXNwbGF5LTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc3BsYXktMDMnKSAhZ2xvYmFsO1xuICAkZGlzcGxheS0wNDogbWFwLWdldCgkdGhlbWUsICdkaXNwbGF5LTA0JykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMDE6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wMScpICFnbG9iYWw7XG4gICRzcGFjaW5nLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDInKSAhZ2xvYmFsO1xuICAkc3BhY2luZy0wMzogbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTAzJykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMDQ6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wNCcpICFnbG9iYWw7XG4gICRzcGFjaW5nLTA1OiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDUnKSAhZ2xvYmFsO1xuICAkc3BhY2luZy0wNjogbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA2JykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMDc6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wNycpICFnbG9iYWw7XG4gICRzcGFjaW5nLTA4OiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDgnKSAhZ2xvYmFsO1xuICAkc3BhY2luZy0wOTogbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA5JykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMTA6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0xMCcpICFnbG9iYWw7XG4gICRzcGFjaW5nLTExOiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMTEnKSAhZ2xvYmFsO1xuICAkc3BhY2luZy0xMjogbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTEyJykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMTM6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0xMycpICFnbG9iYWw7XG4gICRmbHVpZC1zcGFjaW5nLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZsdWlkLXNwYWNpbmctMDEnKSAhZ2xvYmFsO1xuICAkZmx1aWQtc3BhY2luZy0wMjogbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTAyJykgIWdsb2JhbDtcbiAgJGZsdWlkLXNwYWNpbmctMDM6IG1hcC1nZXQoJHRoZW1lLCAnZmx1aWQtc3BhY2luZy0wMycpICFnbG9iYWw7XG4gICRmbHVpZC1zcGFjaW5nLTA0OiBtYXAtZ2V0KCR0aGVtZSwgJ2ZsdWlkLXNwYWNpbmctMDQnKSAhZ2xvYmFsO1xuICAkbGF5b3V0LTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wMScpICFnbG9iYWw7XG4gICRsYXlvdXQtMDI6IG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTAyJykgIWdsb2JhbDtcbiAgJGxheW91dC0wMzogbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDMnKSAhZ2xvYmFsO1xuICAkbGF5b3V0LTA0OiBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wNCcpICFnbG9iYWw7XG4gICRsYXlvdXQtMDU6IG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTA1JykgIWdsb2JhbDtcbiAgJGxheW91dC0wNjogbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDYnKSAhZ2xvYmFsO1xuICAkbGF5b3V0LTA3OiBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wNycpICFnbG9iYWw7XG4gICRjb250YWluZXItMDE6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTAxJykgIWdsb2JhbDtcbiAgJGNvbnRhaW5lci0wMjogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDInKSAhZ2xvYmFsO1xuICAkY29udGFpbmVyLTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wMycpICFnbG9iYWw7XG4gICRjb250YWluZXItMDQ6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTA0JykgIWdsb2JhbDtcbiAgJGNvbnRhaW5lci0wNTogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDUnKSAhZ2xvYmFsO1xuICAkaWNvbi1zaXplLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tc2l6ZS0wMScpICFnbG9iYWw7XG4gICRpY29uLXNpemUtMDI6IG1hcC1nZXQoJHRoZW1lLCAnaWNvbi1zaXplLTAyJykgIWdsb2JhbDtcblxuICBAaWYgZ2xvYmFsLXZhcmlhYmxlLWV4aXN0cygnZmVhdHVyZS1mbGFncycpIGFuZFxuICAgIG1hcC1nZXQoJGZlYXR1cmUtZmxhZ3MsICdlbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzJylcbiAge1xuICAgICRpbnRlcmFjdGl2ZS0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pbnRlcmFjdGl2ZS0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaW50ZXJhY3RpdmUtMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW50ZXJhY3RpdmUtMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludGVyYWN0aXZlLTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGludGVyYWN0aXZlLTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWludGVyYWN0aXZlLTAzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnRlcmFjdGl2ZS0wNDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pbnRlcmFjdGl2ZS0wNCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDQnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdWktYmFja2dyb3VuZDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS11aS1iYWNrZ3JvdW5kLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd1aS1iYWNrZ3JvdW5kJylcbiAgICApICFnbG9iYWw7XG4gICAgJHVpLTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXVpLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd1aS0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR1aS0wMjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS11aS0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndWktMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdWktMDM6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdWktMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTAzJylcbiAgICApICFnbG9iYWw7XG4gICAgJHVpLTA0OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXVpLTA0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd1aS0wNCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR1aS0wNTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS11aS0wNSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndWktMDUnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdGV4dC0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS10ZXh0LTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd0ZXh0LTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJHRleHQtMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdGV4dC0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR0ZXh0LTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXRleHQtMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdGV4dC0wNDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS10ZXh0LTA0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd0ZXh0LTA0JylcbiAgICApICFnbG9iYWw7XG4gICAgJHRleHQtMDU6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdGV4dC0wNSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wNScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR0ZXh0LWVycm9yOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXRleHQtZXJyb3IsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtZXJyb3InKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaWNvbi0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pY29uLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpY29uLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGljb24tMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taWNvbi0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaWNvbi0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpY29uLTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWljb24tMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkbGluay0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1saW5rLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdsaW5rLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGxpbmstMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tbGluay0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnbGluay0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnZlcnNlLWxpbms6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW52ZXJzZS1saW5rLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLWxpbmsnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZmllbGQtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZmllbGQtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ZpZWxkLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGZpZWxkLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWZpZWxkLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdmaWVsZC0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnZlcnNlLTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWludmVyc2UtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaW52ZXJzZS0wMjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pbnZlcnNlLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJHN1cHBvcnQtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3VwcG9ydC0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzdXBwb3J0LTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXN1cHBvcnQtMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3N1cHBvcnQtMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3VwcG9ydC0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zdXBwb3J0LTAzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzdXBwb3J0LTAzJylcbiAgICApICFnbG9iYWw7XG4gICAgJHN1cHBvcnQtMDQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3VwcG9ydC0wNCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wNCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnZlcnNlLXN1cHBvcnQtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW52ZXJzZS1zdXBwb3J0LTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaW52ZXJzZS1zdXBwb3J0LTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWludmVyc2Utc3VwcG9ydC0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1zdXBwb3J0LTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGludmVyc2Utc3VwcG9ydC0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pbnZlcnNlLXN1cHBvcnQtMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2Utc3VwcG9ydC0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnZlcnNlLXN1cHBvcnQtMDQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW52ZXJzZS1zdXBwb3J0LTA0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDQnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkb3ZlcmxheS0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1vdmVybGF5LTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdvdmVybGF5LTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGRhbmdlci0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1kYW5nZXItMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2Rhbmdlci0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRkYW5nZXItMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZGFuZ2VyLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdkYW5nZXItMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZm9jdXM6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZm9jdXMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ZvY3VzJylcbiAgICApICFnbG9iYWw7XG4gICAgJGludmVyc2UtZm9jdXMtdWk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW52ZXJzZS1mb2N1cy11aSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1mb2N1cy11aScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRob3Zlci1wcmltYXJ5OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWhvdmVyLXByaW1hcnksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXByaW1hcnknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYWN0aXZlLXByaW1hcnk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tYWN0aXZlLXByaW1hcnksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS1wcmltYXJ5JylcbiAgICApICFnbG9iYWw7XG4gICAgJGhvdmVyLXByaW1hcnktdGV4dDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1ob3Zlci1wcmltYXJ5LXRleHQsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXByaW1hcnktdGV4dCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRob3Zlci1zZWNvbmRhcnk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taG92ZXItc2Vjb25kYXJ5LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1zZWNvbmRhcnknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYWN0aXZlLXNlY29uZGFyeTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1hY3RpdmUtc2Vjb25kYXJ5LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtc2Vjb25kYXJ5JylcbiAgICApICFnbG9iYWw7XG4gICAgJGhvdmVyLXRlcnRpYXJ5OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWhvdmVyLXRlcnRpYXJ5LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci10ZXJ0aWFyeScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRhY3RpdmUtdGVydGlhcnk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tYWN0aXZlLXRlcnRpYXJ5LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtdGVydGlhcnknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaG92ZXItdWk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taG92ZXItdWksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXVpJylcbiAgICApICFnbG9iYWw7XG4gICAgJGhvdmVyLWxpZ2h0LXVpOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWhvdmVyLWxpZ2h0LXVpLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1saWdodC11aScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRob3Zlci1zZWxlY3RlZC11aTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1ob3Zlci1zZWxlY3RlZC11aSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItc2VsZWN0ZWQtdWknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYWN0aXZlLXVpOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWFjdGl2ZS11aSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLXVpJylcbiAgICApICFnbG9iYWw7XG4gICAgJGFjdGl2ZS1saWdodC11aTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1hY3RpdmUtbGlnaHQtdWksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS1saWdodC11aScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzZWxlY3RlZC11aTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zZWxlY3RlZC11aSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc2VsZWN0ZWQtdWknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc2VsZWN0ZWQtbGlnaHQtdWk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc2VsZWN0ZWQtbGlnaHQtdWksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NlbGVjdGVkLWxpZ2h0LXVpJylcbiAgICApICFnbG9iYWw7XG4gICAgJGludmVyc2UtaG92ZXItdWk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW52ZXJzZS1ob3Zlci11aSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1ob3Zlci11aScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRob3Zlci1kYW5nZXI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taG92ZXItZGFuZ2VyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1kYW5nZXInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYWN0aXZlLWRhbmdlcjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1hY3RpdmUtZGFuZ2VyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtZGFuZ2VyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGhvdmVyLXJvdzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1ob3Zlci1yb3csXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXJvdycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR2aXNpdGVkLWxpbms6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdmlzaXRlZC1saW5rLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd2aXNpdGVkLWxpbmsnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZGlzYWJsZWQtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZGlzYWJsZWQtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc2FibGVkLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGRpc2FibGVkLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWRpc2FibGVkLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdkaXNhYmxlZC0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRkaXNhYmxlZC0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1kaXNhYmxlZC0wMyxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZGlzYWJsZWQtMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaGlnaGxpZ2h0OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWhpZ2hsaWdodCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaGlnaGxpZ2h0JylcbiAgICApICFnbG9iYWw7XG4gICAgJGRlY29yYXRpdmUtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZGVjb3JhdGl2ZS0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZGVjb3JhdGl2ZS0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRidXR0b24tc2VwYXJhdG9yOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWJ1dHRvbi1zZXBhcmF0b3IsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2J1dHRvbi1zZXBhcmF0b3InKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc2tlbGV0b24tMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc2tlbGV0b24tMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NrZWxldG9uLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJHNrZWxldG9uLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNrZWxldG9uLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdza2VsZXRvbi0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRicmFuZC0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1icmFuZC0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYnJhbmQtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYnJhbmQtMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tYnJhbmQtMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2JyYW5kLTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGJyYW5kLTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWJyYW5kLTAzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdicmFuZC0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRhY3RpdmUtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tYWN0aXZlLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaG92ZXItZmllbGQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taG92ZXItZmllbGQsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLWZpZWxkJylcbiAgICApICFnbG9iYWw7XG4gICAgJGRhbmdlcjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1kYW5nZXIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2RhbmdlcicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0wMjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJHNwYWNpbmctMDM6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3BhY2luZy0wMyxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTA0OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMDQsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDQnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0wNTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTA1LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA1JylcbiAgICApICFnbG9iYWw7XG4gICAgJHNwYWNpbmctMDY6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3BhY2luZy0wNixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wNicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTA3OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMDcsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDcnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0wODogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTA4LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA4JylcbiAgICApICFnbG9iYWw7XG4gICAgJHNwYWNpbmctMDk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3BhY2luZy0wOSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wOScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTEwOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMTAsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMTAnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0xMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTExLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTExJylcbiAgICApICFnbG9iYWw7XG4gICAgJHNwYWNpbmctMTI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3BhY2luZy0xMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0xMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTEzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMTMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMTMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZmx1aWQtc3BhY2luZy0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1mbHVpZC1zcGFjaW5nLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGZsdWlkLXNwYWNpbmctMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZmx1aWQtc3BhY2luZy0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZmx1aWQtc3BhY2luZy0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRmbHVpZC1zcGFjaW5nLTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWZsdWlkLXNwYWNpbmctMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ZsdWlkLXNwYWNpbmctMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZmx1aWQtc3BhY2luZy0wNDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1mbHVpZC1zcGFjaW5nLTA0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTA0JylcbiAgICApICFnbG9iYWw7XG4gICAgJGxheW91dC0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1sYXlvdXQtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRsYXlvdXQtMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tbGF5b3V0LTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkbGF5b3V0LTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWxheW91dC0wMyxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTAzJylcbiAgICApICFnbG9iYWw7XG4gICAgJGxheW91dC0wNDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1sYXlvdXQtMDQsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wNCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRsYXlvdXQtMDU6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tbGF5b3V0LTA1LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDUnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkbGF5b3V0LTA2OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWxheW91dC0wNixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTA2JylcbiAgICApICFnbG9iYWw7XG4gICAgJGxheW91dC0wNzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1sYXlvdXQtMDcsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wNycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRjb250YWluZXItMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tY29udGFpbmVyLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkY29udGFpbmVyLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWNvbnRhaW5lci0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGNvbnRhaW5lci0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1jb250YWluZXItMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRjb250YWluZXItMDQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tY29udGFpbmVyLTA0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDQnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkY29udGFpbmVyLTA1OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWNvbnRhaW5lci0wNSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTA1JylcbiAgICApICFnbG9iYWw7XG4gICAgJGljb24tc2l6ZS0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pY29uLXNpemUtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tc2l6ZS0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpY29uLXNpemUtMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taWNvbi1zaXplLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpY29uLXNpemUtMDInKVxuICAgICkgIWdsb2JhbDtcbiAgfVxuICBAaWYgJGVtaXQtY3VzdG9tLXByb3BlcnRpZXMgPT0gdHJ1ZSB7XG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW50ZXJhY3RpdmUtMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnRlcmFjdGl2ZS0wMScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDEnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpbnRlcmFjdGl2ZS0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2ludGVyYWN0aXZlLTAyJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wMicpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludGVyYWN0aXZlLTAzJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaW50ZXJhY3RpdmUtMDMnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludGVyYWN0aXZlLTAzJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW50ZXJhY3RpdmUtMDQnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnRlcmFjdGl2ZS0wNCcsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDQnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICd1aS1iYWNrZ3JvdW5kJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAndWktYmFja2dyb3VuZCcsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAndWktYmFja2dyb3VuZCcpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAndWktMDEnLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3VpLTAxJywgbWFwLWdldCgkdGhlbWUsICd1aS0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ3VpLTAyJywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd1aS0wMicsIG1hcC1nZXQoJHRoZW1lLCAndWktMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICd1aS0wMycsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgndWktMDMnLCBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTAzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAndWktMDQnLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3VpLTA0JywgbWFwLWdldCgkdGhlbWUsICd1aS0wNCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ3VpLTA1JywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd1aS0wNScsIG1hcC1nZXQoJHRoZW1lLCAndWktMDUnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICd0ZXh0LTAxJywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd0ZXh0LTAxJywgbWFwLWdldCgkdGhlbWUsICd0ZXh0LTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAndGV4dC0wMicsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgndGV4dC0wMicsIG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wMicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ3RleHQtMDMnLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3RleHQtMDMnLCBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtMDMnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICd0ZXh0LTA0JywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd0ZXh0LTA0JywgbWFwLWdldCgkdGhlbWUsICd0ZXh0LTA0JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAndGV4dC0wNScsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgndGV4dC0wNScsIG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wNScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICd0ZXh0LWVycm9yJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd0ZXh0LWVycm9yJywgbWFwLWdldCgkdGhlbWUsICd0ZXh0LWVycm9yJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnaWNvbi0wMScsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaWNvbi0wMScsIG1hcC1nZXQoJHRoZW1lLCAnaWNvbi0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2ljb24tMDInLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2ljb24tMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdpY29uLTAzJywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdpY29uLTAzJywgbWFwLWdldCgkdGhlbWUsICdpY29uLTAzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnbGluay0wMScsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGluay0wMScsIG1hcC1nZXQoJHRoZW1lLCAnbGluay0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2xpbmstMDInLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2xpbmstMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2xpbmstMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW52ZXJzZS1saW5rJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdpbnZlcnNlLWxpbmsnLCBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtbGluaycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2ZpZWxkLTAxJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2ZpZWxkLTAxJywgbWFwLWdldCgkdGhlbWUsICdmaWVsZC0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2ZpZWxkLTAyJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2ZpZWxkLTAyJywgbWFwLWdldCgkdGhlbWUsICdmaWVsZC0wMicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpbnZlcnNlLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdpbnZlcnNlLTAxJywgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludmVyc2UtMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2ludmVyc2UtMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3VwcG9ydC0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3VwcG9ydC0wMScsIG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzdXBwb3J0LTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzdXBwb3J0LTAyJywgbWFwLWdldCgkdGhlbWUsICdzdXBwb3J0LTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3N1cHBvcnQtMDMnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3N1cHBvcnQtMDMnLCBtYXAtZ2V0KCR0aGVtZSwgJ3N1cHBvcnQtMDMnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3VwcG9ydC0wNCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3VwcG9ydC0wNCcsIG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wNCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpbnZlcnNlLXN1cHBvcnQtMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnZlcnNlLXN1cHBvcnQtMDEnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2Utc3VwcG9ydC0wMScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludmVyc2Utc3VwcG9ydC0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2ludmVyc2Utc3VwcG9ydC0wMicsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1zdXBwb3J0LTAyJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW52ZXJzZS1zdXBwb3J0LTAzJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaW52ZXJzZS1zdXBwb3J0LTAzJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDMnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpbnZlcnNlLXN1cHBvcnQtMDQnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnZlcnNlLXN1cHBvcnQtMDQnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2Utc3VwcG9ydC0wNCcpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ292ZXJsYXktMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ292ZXJsYXktMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ292ZXJsYXktMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdkYW5nZXItMDEnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZGFuZ2VyLTAxJywgbWFwLWdldCgkdGhlbWUsICdkYW5nZXItMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdkYW5nZXItMDInLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZGFuZ2VyLTAyJywgbWFwLWdldCgkdGhlbWUsICdkYW5nZXItMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdmb2N1cycsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZm9jdXMnLCBtYXAtZ2V0KCR0aGVtZSwgJ2ZvY3VzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludmVyc2UtZm9jdXMtdWknLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnZlcnNlLWZvY3VzLXVpJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLWZvY3VzLXVpJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaG92ZXItcHJpbWFyeScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2hvdmVyLXByaW1hcnknLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXByaW1hcnknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdhY3RpdmUtcHJpbWFyeScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2FjdGl2ZS1wcmltYXJ5JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtcHJpbWFyeScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hvdmVyLXByaW1hcnktdGV4dCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2hvdmVyLXByaW1hcnktdGV4dCcsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItcHJpbWFyeS10ZXh0JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaG92ZXItc2Vjb25kYXJ5JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaG92ZXItc2Vjb25kYXJ5JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1zZWNvbmRhcnknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdhY3RpdmUtc2Vjb25kYXJ5JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnYWN0aXZlLXNlY29uZGFyeScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLXNlY29uZGFyeScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hvdmVyLXRlcnRpYXJ5JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaG92ZXItdGVydGlhcnknLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXRlcnRpYXJ5JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnYWN0aXZlLXRlcnRpYXJ5JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnYWN0aXZlLXRlcnRpYXJ5JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtdGVydGlhcnknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2hvdmVyLXVpJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2hvdmVyLXVpJywgbWFwLWdldCgkdGhlbWUsICdob3Zlci11aScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdob3Zlci1saWdodC11aScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2hvdmVyLWxpZ2h0LXVpJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1saWdodC11aScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hvdmVyLXNlbGVjdGVkLXVpJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaG92ZXItc2VsZWN0ZWQtdWknLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXNlbGVjdGVkLXVpJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdhY3RpdmUtdWknLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnYWN0aXZlLXVpJywgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtdWknKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnYWN0aXZlLWxpZ2h0LXVpJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnYWN0aXZlLWxpZ2h0LXVpJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtbGlnaHQtdWknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzZWxlY3RlZC11aScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc2VsZWN0ZWQtdWknLCBtYXAtZ2V0KCR0aGVtZSwgJ3NlbGVjdGVkLXVpJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NlbGVjdGVkLWxpZ2h0LXVpJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnc2VsZWN0ZWQtbGlnaHQtdWknLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NlbGVjdGVkLWxpZ2h0LXVpJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW52ZXJzZS1ob3Zlci11aScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2ludmVyc2UtaG92ZXItdWknLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtaG92ZXItdWknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdob3Zlci1kYW5nZXInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2hvdmVyLWRhbmdlcicsIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItZGFuZ2VyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2FjdGl2ZS1kYW5nZXInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdhY3RpdmUtZGFuZ2VyJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtZGFuZ2VyJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdob3Zlci1yb3cnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaG92ZXItcm93JywgbWFwLWdldCgkdGhlbWUsICdob3Zlci1yb3cnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAndmlzaXRlZC1saW5rJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd2aXNpdGVkLWxpbmsnLCBtYXAtZ2V0KCR0aGVtZSwgJ3Zpc2l0ZWQtbGluaycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdkaXNhYmxlZC0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZGlzYWJsZWQtMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc2FibGVkLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2Rpc2FibGVkLTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdkaXNhYmxlZC0wMicsIG1hcC1nZXQoJHRoZW1lLCAnZGlzYWJsZWQtMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZGlzYWJsZWQtMDMnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2Rpc2FibGVkLTAzJywgbWFwLWdldCgkdGhlbWUsICdkaXNhYmxlZC0wMycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2hpZ2hsaWdodCcsICRlbWl0LWRpZmZlcmVuY2UpXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdoaWdobGlnaHQnLCBtYXAtZ2V0KCR0aGVtZSwgJ2hpZ2hsaWdodCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdkZWNvcmF0aXZlLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZGVjb3JhdGl2ZS0wMScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZGVjb3JhdGl2ZS0wMScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2J1dHRvbi1zZXBhcmF0b3InLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdidXR0b24tc2VwYXJhdG9yJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdidXR0b24tc2VwYXJhdG9yJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc2tlbGV0b24tMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NrZWxldG9uLTAxJywgbWFwLWdldCgkdGhlbWUsICdza2VsZXRvbi0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdza2VsZXRvbi0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc2tlbGV0b24tMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ3NrZWxldG9uLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnYnJhbmQtMDEnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnYnJhbmQtMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2JyYW5kLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnYnJhbmQtMDInLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnYnJhbmQtMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2JyYW5kLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnYnJhbmQtMDMnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnYnJhbmQtMDMnLCBtYXAtZ2V0KCR0aGVtZSwgJ2JyYW5kLTAzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnYWN0aXZlLTAxJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2FjdGl2ZS0wMScsIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hvdmVyLWZpZWxkJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdob3Zlci1maWVsZCcsIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItZmllbGQnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdkYW5nZXInLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2RhbmdlcicsIG1hcC1nZXQoJHRoZW1lLCAnZGFuZ2VyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2NhcHRpb24tMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2NhcHRpb24tMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2NhcHRpb24tMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYWJlbC0wMScsICRlbWl0LWRpZmZlcmVuY2UpXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdsYWJlbC0wMScsIG1hcC1nZXQoJHRoZW1lLCAnbGFiZWwtMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaGVscGVyLXRleHQtMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdoZWxwZXItdGV4dC0wMScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaGVscGVyLXRleHQtMDEnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdib2R5LXNob3J0LTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnYm9keS1zaG9ydC0wMScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYm9keS1zaG9ydC0wMScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2JvZHktbG9uZy0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnYm9keS1sb25nLTAxJywgbWFwLWdldCgkdGhlbWUsICdib2R5LWxvbmctMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnYm9keS1zaG9ydC0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2JvZHktc2hvcnQtMDInLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2JvZHktc2hvcnQtMDInKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdib2R5LWxvbmctMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2JvZHktbG9uZy0wMicsIG1hcC1nZXQoJHRoZW1lLCAnYm9keS1sb25nLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnY29kZS0wMScsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnY29kZS0wMScsIG1hcC1nZXQoJHRoZW1lLCAnY29kZS0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2NvZGUtMDInLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2NvZGUtMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2NvZGUtMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaGVhZGluZy0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaGVhZGluZy0wMScsIG1hcC1nZXQoJHRoZW1lLCAnaGVhZGluZy0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDEnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wMScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hlYWRpbmctMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2hlYWRpbmctMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2hlYWRpbmctMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTAyJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDInKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDMnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDMnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wMycpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNCcsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTA0JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTA1JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTA1JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDUnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDYnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDYnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNicpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNycsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTA3JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZXhwcmVzc2l2ZS1oZWFkaW5nLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZXhwcmVzc2l2ZS1oZWFkaW5nLTAxJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLWhlYWRpbmctMDEnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdleHByZXNzaXZlLWhlYWRpbmctMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdleHByZXNzaXZlLWhlYWRpbmctMDInLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtaGVhZGluZy0wMicpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2V4cHJlc3NpdmUtaGVhZGluZy0wMycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2V4cHJlc3NpdmUtaGVhZGluZy0wMycsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1oZWFkaW5nLTAzJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZXhwcmVzc2l2ZS1oZWFkaW5nLTA0JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZXhwcmVzc2l2ZS1oZWFkaW5nLTA0JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLWhlYWRpbmctMDQnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdleHByZXNzaXZlLWhlYWRpbmctMDUnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdleHByZXNzaXZlLWhlYWRpbmctMDUnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtaGVhZGluZy0wNScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2V4cHJlc3NpdmUtaGVhZGluZy0wNicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2V4cHJlc3NpdmUtaGVhZGluZy0wNicsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1oZWFkaW5nLTA2JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZXhwcmVzc2l2ZS1wYXJhZ3JhcGgtMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdleHByZXNzaXZlLXBhcmFncmFwaC0wMScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1wYXJhZ3JhcGgtMDEnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdxdW90YXRpb24tMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3F1b3RhdGlvbi0wMScsIG1hcC1nZXQoJHRoZW1lLCAncXVvdGF0aW9uLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3F1b3RhdGlvbi0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgncXVvdGF0aW9uLTAyJywgbWFwLWdldCgkdGhlbWUsICdxdW90YXRpb24tMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZGlzcGxheS0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZGlzcGxheS0wMScsIG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheS0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdkaXNwbGF5LTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdkaXNwbGF5LTAyJywgbWFwLWdldCgkdGhlbWUsICdkaXNwbGF5LTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2Rpc3BsYXktMDMnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2Rpc3BsYXktMDMnLCBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc3BsYXktMDMnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZGlzcGxheS0wNCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZGlzcGxheS0wNCcsIG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheS0wNCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTAxJywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NwYWNpbmctMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NwYWNpbmctMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0wMycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0wMycsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wMycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTA0JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTA0JywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA0JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NwYWNpbmctMDUnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NwYWNpbmctMDUnLCBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDUnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0wNicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0wNicsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wNicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTA3JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTA3JywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA3JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NwYWNpbmctMDgnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NwYWNpbmctMDgnLCBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDgnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0wOScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0wOScsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wOScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTEwJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTEwJywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTEwJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NwYWNpbmctMTEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NwYWNpbmctMTEnLCBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMTEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0xMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0xMicsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0xMicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTEzJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTEzJywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTEzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ZsdWlkLXNwYWNpbmctMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdmbHVpZC1zcGFjaW5nLTAxJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTAxJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZmx1aWQtc3BhY2luZy0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2ZsdWlkLXNwYWNpbmctMDInLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ZsdWlkLXNwYWNpbmctMDInKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdmbHVpZC1zcGFjaW5nLTAzJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZmx1aWQtc3BhY2luZy0wMycsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZmx1aWQtc3BhY2luZy0wMycpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ZsdWlkLXNwYWNpbmctMDQnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdmbHVpZC1zcGFjaW5nLTA0JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTA0JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDEnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTAxJywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDInLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTAyJywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDMnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTAzJywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDMnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDQnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTA0JywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDQnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDUnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTA1JywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDUnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDYnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTA2JywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDYnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDcnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTA3JywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDcnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnY29udGFpbmVyLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdjb250YWluZXItMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdjb250YWluZXItMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2NvbnRhaW5lci0wMicsIG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2NvbnRhaW5lci0wMycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnY29udGFpbmVyLTAzJywgbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDMnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnY29udGFpbmVyLTA0JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdjb250YWluZXItMDQnLCBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wNCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdjb250YWluZXItMDUnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2NvbnRhaW5lci0wNScsIG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTA1JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ljb24tc2l6ZS0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaWNvbi1zaXplLTAxJywgbWFwLWdldCgkdGhlbWUsICdpY29uLXNpemUtMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaWNvbi1zaXplLTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdpY29uLXNpemUtMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tc2l6ZS0wMicpKTtcbiAgICB9XG4gIH1cblxuICBAY29udGVudDtcblxuICAvLyBSZXNldCB0byBkZWZhdWx0IHRoZW1lIGFmdGVyIGFwcGx5IGluIGNvbnRlbnRcbiAgQGlmICRjYXJib24tLXRoZW1lICE9ICRwYXJlbnQtY2FyYm9uLXRoZW1lIHtcbiAgICAkY2FyYm9uLS10aGVtZTogJHBhcmVudC1jYXJib24tdGhlbWUgIWdsb2JhbDtcblxuICAgIEBpbmNsdWRlIGNhcmJvbi0tdGhlbWUoKTtcbiAgfVxufVxuIl19 */"] });
    return SmileEditorComponent;
})();



/***/ }),

/***/ "CBGr":
/*!************************************************************************!*\
  !*** ./src/app/modules/retrosynthesis/retrosynthesis-export.module.ts ***!
  \************************************************************************/
/*! exports provided: RetrosynthesisExportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrosynthesisExportModule", function() { return RetrosynthesisExportModule; });
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/shared.module */ "PCNd");
/* harmony import */ var _projects_projects_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects/projects-shared.module */ "Nfod");
/* harmony import */ var _retrosynthesis_wizard_retrosynthesis_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retrosynthesis-wizard/retrosynthesis-wizard.component */ "YEdr");
/* harmony import */ var _retrosynthesis_wizard_retrosynthesis_wizard_textarea_retrosynthesis_wizard_textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retrosynthesis-wizard/retrosynthesis-wizard-textarea/retrosynthesis-wizard-textarea.component */ "aAdo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");


// tslint:disable-next-line: max-line-length

// tslint:disable-next-line: max-line-length


const NG_MODULES = [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _projects_projects_shared_module__WEBPACK_IMPORTED_MODULE_1__["ProjectsSharedModule"]];
const NG_COMPONENTS = [_retrosynthesis_wizard_retrosynthesis_wizard_component__WEBPACK_IMPORTED_MODULE_2__["RetrosynthesisWizardComponent"], _retrosynthesis_wizard_retrosynthesis_wizard_textarea_retrosynthesis_wizard_textarea_component__WEBPACK_IMPORTED_MODULE_3__["RetrosynthesisWizardTextareaComponent"]];
const NG_ENTRY_COMPONENTS = [_retrosynthesis_wizard_retrosynthesis_wizard_component__WEBPACK_IMPORTED_MODULE_2__["RetrosynthesisWizardComponent"]];
let RetrosynthesisExportModule = /*@__PURE__*/ (() => {
    class RetrosynthesisExportModule {
    }
    RetrosynthesisExportModule.ɵfac = function RetrosynthesisExportModule_Factory(t) { return new (t || RetrosynthesisExportModule)(); };
    RetrosynthesisExportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RetrosynthesisExportModule });
    RetrosynthesisExportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[...NG_MODULES]] });
    return RetrosynthesisExportModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RetrosynthesisExportModule, { declarations: [_retrosynthesis_wizard_retrosynthesis_wizard_component__WEBPACK_IMPORTED_MODULE_2__["RetrosynthesisWizardComponent"], _retrosynthesis_wizard_retrosynthesis_wizard_textarea_retrosynthesis_wizard_textarea_component__WEBPACK_IMPORTED_MODULE_3__["RetrosynthesisWizardTextareaComponent"]], imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _projects_projects_shared_module__WEBPACK_IMPORTED_MODULE_1__["ProjectsSharedModule"]], exports: [_retrosynthesis_wizard_retrosynthesis_wizard_component__WEBPACK_IMPORTED_MODULE_2__["RetrosynthesisWizardComponent"], _retrosynthesis_wizard_retrosynthesis_wizard_textarea_retrosynthesis_wizard_textarea_component__WEBPACK_IMPORTED_MODULE_3__["RetrosynthesisWizardTextareaComponent"]] }); })();



/***/ }),

/***/ "E+4U":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/projects/reactions-collection/reactions-collection.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ReactionsCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactionsCollectionComponent", function() { return ReactionsCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _modules_projects_project_header_project_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/projects/project-header/project-header.component */ "o8XP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_modules_projects_reactions_list_reactions_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/projects/reactions-list/reactions-list.component */ "WBuC");







const _c0 = function () { return ["selectAll", "exportReaction", "actions"]; };
function ReactionsCollectionComponent_ibm_reactions_list_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ibm-reactions-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("smileChange", function ReactionsCollectionComponent_ibm_reactions_list_1_Template_ibm_reactions_list_smileChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onSmileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectId", ctx_r0.projectId)("isChild", ctx_r0.isChild)("service", ctx_r0.apiService.reactionsCollection)("reactionListParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    }
}
let ReactionsCollectionComponent = /*@__PURE__*/ (() => {
    class ReactionsCollectionComponent {
        constructor(route, apiService) {
            this.route = route;
            this.apiService = apiService;
            this.isChild = false;
            this.smileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        ngOnInit() {
            if (!this.projectId) {
                this.route.params.subscribe(params => {
                    this.projectId = params.projectId || null;
                });
            }
        }
        onSmileChange(event) {
            this.smileChange.emit(event);
        }
    }
    ReactionsCollectionComponent.ɵfac = function ReactionsCollectionComponent_Factory(t) { return new (t || ReactionsCollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
    ReactionsCollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReactionsCollectionComponent, selectors: [["ibm-reactions-collection"]], inputs: { projectId: "projectId", isChild: "isChild" }, outputs: { smileChange: "smileChange" }, decls: 2, vars: 1, consts: [[1, "ibm--header", "ibm--header__fixed"], ["class", "ibm--body__fixed ibm--project__view_port", "reactionType", "reactions-collection", "header", "Reactions Collection", 3, "projectId", "isChild", "service", "reactionListParams", "smileChange", 4, "ngIf"], ["reactionType", "reactions-collection", "header", "Reactions Collection", 1, "ibm--body__fixed", "ibm--project__view_port", 3, "projectId", "isChild", "service", "reactionListParams", "smileChange"]], template: function ReactionsCollectionComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ibm-project-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReactionsCollectionComponent_ibm_reactions_list_1_Template, 1, 5, "ibm-reactions-list", 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectId);
            }
        }, directives: [_modules_projects_project_header_project_header_component__WEBPACK_IMPORTED_MODULE_3__["ProjectHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _app_modules_projects_reactions_list_reactions_list_component__WEBPACK_IMPORTED_MODULE_5__["ReactionsListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFjdGlvbnMtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ReactionsCollectionComponent;
})();



/***/ }),

/***/ "Gd3s":
/*!*****************************************************************!*\
  !*** ./src/app/modules/projects/attempts/attempts.component.ts ***!
  \*****************************************************************/
/*! exports provided: AttemptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttemptsComponent", function() { return AttemptsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _modules_projects_project_header_project_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/projects/project-header/project-header.component */ "o8XP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_modules_projects_reactions_list_reactions_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/projects/reactions-list/reactions-list.component */ "WBuC");







function AttemptsComponent_ibm_reactions_list_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ibm-reactions-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("smileChange", function AttemptsComponent_ibm_reactions_list_1_Template_ibm_reactions_list_smileChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onSmileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectId", ctx_r0.projectId)("isChild", ctx_r0.isChild)("service", ctx_r0.apiService.attempts);
    }
}
let AttemptsComponent = /*@__PURE__*/ (() => {
    class AttemptsComponent {
        constructor(route, apiService) {
            this.route = route;
            this.apiService = apiService;
            this.isChild = false;
            this.smileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        ngOnInit() {
            if (!this.projectId) {
                this.route.params.subscribe(params => {
                    this.projectId = params.projectId || null;
                });
            }
        }
        onSmileChange(event) {
            this.smileChange.emit(event);
        }
    }
    AttemptsComponent.ɵfac = function AttemptsComponent_Factory(t) { return new (t || AttemptsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
    AttemptsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttemptsComponent, selectors: [["ibm-attempts"]], inputs: { projectId: "projectId", isChild: "isChild" }, outputs: { smileChange: "smileChange" }, decls: 2, vars: 1, consts: [[1, ""], ["class", "ibm--body__fixed ibm--project__view_port", "reactionType", "attempts", "header", "Reactions Attempts", 3, "projectId", "isChild", "service", "smileChange", 4, "ngIf"], ["reactionType", "attempts", "header", "Reactions Attempts", 1, "ibm--body__fixed", "ibm--project__view_port", 3, "projectId", "isChild", "service", "smileChange"]], template: function AttemptsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ibm-project-header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttemptsComponent_ibm_reactions_list_1_Template, 1, 3, "ibm-reactions-list", 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectId);
            }
        }, directives: [_modules_projects_project_header_project_header_component__WEBPACK_IMPORTED_MODULE_3__["ProjectHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _app_modules_projects_reactions_list_reactions_list_component__WEBPACK_IMPORTED_MODULE_5__["ReactionsListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbXB0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AttemptsComponent;
})();



/***/ }),

/***/ "KxUX":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/projects/workspace-header/workspace-header.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WorkspaceHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceHeaderComponent", function() { return WorkspaceHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared_carbon_design_bx_breadcrumbs_bx_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/carbon-design/bx-breadcrumbs/bx-breadcrumbs.component */ "uDa7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function WorkspaceHeaderComponent_button_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceHeaderComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onGetRetrosynthesis(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New Retrosynthesis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disableActions);
    }
}
function WorkspaceHeaderComponent_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceHeaderComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onRunPrediction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New Reaction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Arrow right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disableActions);
    }
}
function WorkspaceHeaderComponent_button_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceHeaderComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onNewReaction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back to workspace ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function WorkspaceHeaderComponent_button_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceHeaderComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onNewReaction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Open Workspace ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let WorkspaceHeaderComponent = /*@__PURE__*/ (() => {
    class WorkspaceHeaderComponent {
        constructor(activatedRoute, router, ketcherDataService) {
            this.activatedRoute = activatedRoute;
            this.router = router;
            this.ketcherDataService = ketcherDataService;
            this.disableActions = false;
            this.useBack = false;
            this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.canEnableNewReaction = false;
            this.breadcrumbs = [
                {
                    class: 'font-weight-semibold',
                    link: '/projects',
                    active: false,
                    title: 'View Projects',
                    label: 'Projects',
                },
            ];
        }
        ngOnInit() {
            this.activatedRoute.url.subscribe((urlSegment) => {
                this.canEnableNewReaction = false;
                if (urlSegment[0] && urlSegment[0].path === 'outcomes') {
                    this.canEnableNewReaction = true;
                    return;
                }
            });
            this.projectId = this.activatedRoute.snapshot.paramMap.get('projectId');
            this.projectName = this.activatedRoute.snapshot.paramMap.get('projectName');
            this.breadcrumbs.push({
                active: false,
                label: `Project: ${this.projectName}`,
                link: `/projects/${this.projectId}/${this.projectName}/reactions-collection`,
            });
            this.breadcrumbs.push({
                active: true,
                label: `Workspace`,
            });
        }
        onGetRetrosynthesis() {
            this.action.emit('getRetrosynthesis');
        }
        onRunPrediction() {
            this.action.emit('runPrediction');
        }
        onNewReaction() {
            this.ketcherDataService.clear();
            this.router.navigate(['projects', this.projectId, this.projectName, 'workspace']);
        }
    }
    WorkspaceHeaderComponent.ɵfac = function WorkspaceHeaderComponent_Factory(t) { return new (t || WorkspaceHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["KetcherDataService"])); };
    WorkspaceHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkspaceHeaderComponent, selectors: [["ibm-workspace-header"]], inputs: { actions: "actions", disableActions: "disableActions", useBack: "useBack" }, outputs: { action: "action" }, decls: 11, vars: 5, consts: [[1, "ibm--header", "ibm--header__fixed"], ["routerLink", "/projects", 1, "ibm--header__logo"], ["divider", "chevron", 3, "breadcrumbs"], [1, "ibm--header__menu"], ["class", "bx--btn bx--btn--primary ibm--header__action ibm--header__action-retrosyntesis", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "bx--btn bx--btn--primary ibm--header__action ibm--header__action-prediction", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "bx--btn bx--btn--ghost ibm--header-retro-top-back-to-workspace", "type", "button", 3, "click", 4, "ngIf"], ["class", "bx--btn bx--btn--primary", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "bx--btn", "bx--btn--primary", "ibm--header__action", "ibm--header__action-retrosyntesis", 3, "disabled", "click"], ["version", "1.1", "id", "Livello_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "18px", "height", "16px", "viewBox", "0 0 18 16", 0, "xml", "space", "preserve", 1, "bx--btn__icon"], ["id", "retrosintesi"], ["id", "retrosintesi_workspace---01", "transform", "translate(-1578.000000, -17.000000)"], ["id", "UI-Icon_x2F_Icon_x2F_chevron--right_x2F__x24_brand-01", "transform", "translate(1579.000000, 17.000000)"], ["d", "M8.169,15.875l-8.5-7.5l0.565-0.641L0.146,7.646l8-8l0.707,0.707L0.996,8.211l7.835,6.914L8.169,15.875z\n\t\t\t\t M16.592,10H5.5V9h11.092V10z M16.592,7H5.5V6h11.092V7z"], ["type", "button", 1, "bx--btn", "bx--btn--primary", "ibm--header__action", "ibm--header__action-prediction", 3, "disabled", "click"], ["focusable", "false", "preserveAspectRatio", "xMidYMid meet", "xmlns", "http://www.w3.org/2000/svg", "width", "18px", "height", "16px", "viewBox", "0 0 32 32", "aria-hidden", "true", 1, "bx--btn__icon", 2, "will-change", "transform"], ["d", "M18 6L16.6 7.4 24.1 15 3 15 3 17 24.1 17 16.6 24.6 18 26 28 16z"], ["type", "button", 1, "bx--btn", "bx--btn--ghost", "ibm--header-retro-top-back-to-workspace", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16 16", "width", "16", "height", "16", 1, "bx--btn__icon"], ["d", "M8 16l1.5-1.5L4 9h12V7H4l5.5-5.5L8 0 0 8z"], ["type", "button", 1, "bx--btn", "bx--btn--primary", 3, "click"]], template: function WorkspaceHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " IBM ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RXN");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ibm-bx-breadcrumbs", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WorkspaceHeaderComponent_button_7_Template, 7, 1, "button", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WorkspaceHeaderComponent_button_8_Template, 6, 1, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WorkspaceHeaderComponent_button_9_Template, 4, 0, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WorkspaceHeaderComponent_button_10_Template, 2, 0, "button", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbs", ctx.breadcrumbs);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions.includes("getRetrosynthesis"));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions.includes("runPrediction"));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.useBack && ctx.canEnableNewReaction);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.useBack && ctx.canEnableNewReaction);
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _shared_carbon_design_bx_breadcrumbs_bx_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["BxBreadcrumbsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0.5em;\n  margin-right: 0.5em;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.ibm--card__collaborators[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n\n.ibm--card__collaborators[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.ibm--header__menu[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n}\n\n.ibm--header__action[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: 1rem;\n  align-items: center;\n}\n\n.ibm--header__action-retrosyntesis[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.ibm--header__action-prediction[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n\n.bx--btn__icon.bx--btn__no_margin[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3dvcmtzcGFjZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQU9FO0VBQ0Usb0JBQUE7QUFKSjs7QUFPRTtFQUNFLGVBQUE7QUFMSjs7QUFVRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFQSjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBU007RUFDRSx5QkFBQTtBQVBSOztBQVlNO0VBQ0Usa0JBQUE7QUFWUjs7QUFpQkU7RUFDRSxjQUFBO0FBZEoiLCJmaWxlIjoid29ya3NwYWNlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvc3R5bGVzL3NldHRpbmdzL3NldHRpbmdzLnNjc3MnO1xuXG5oZWFkZXIge1xuICA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi5pYm0tLWNhcmRfX2NvbGxhYm9yYXRvcnMge1xuICAuYXZhdGFyIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgfVxuXG4gIC5hZGQtYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmlibS0taGVhZGVyIHtcbiAgJl9fbWVudSB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgJl9fYWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgJi1yZXRyb3N5bnRlc2lzIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1wcmVkaWN0aW9uIHtcbiAgICAgIGltZyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJ4LS1idG5fX2ljb24ge1xuICAmLmJ4LS1idG5fX25vX21hcmdpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbiJdfQ== */"] });
    return WorkspaceHeaderComponent;
})();



/***/ }),

/***/ "NihL":
/*!*************************************************************!*\
  !*** ./src/app/modules/projects/projects-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/projects/projects/projects.component */ "943x");
/* harmony import */ var _modules_projects_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/projects/projects-list/projects-list.component */ "2sBM");
/* harmony import */ var _modules_projects_attempts_attempts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/projects/attempts/attempts.component */ "Gd3s");
/* harmony import */ var _modules_projects_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/projects/new-project/new-project.component */ "9cDe");
/* harmony import */ var _modules_projects_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/projects/workspace/workspace.component */ "4NX8");
/* harmony import */ var _modules_projects_reactions_collection_reactions_collection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/projects/reactions-collection/reactions-collection.component */ "E+4U");
/* harmony import */ var _modules_projects_prediction_outcomes_prediction_outcomes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/projects/prediction-outcomes/prediction-outcomes.component */ "7aeT");
/* harmony import */ var _prediction_outcomes_prediction_outcomes_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prediction-outcomes/prediction-outcomes.enum */ "0z5/");
/* harmony import */ var _retrosynthesis_retrosynthesis_list_retrosynthesis_list_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../retrosynthesis/retrosynthesis-list/retrosynthesis-list.enum */ "azD1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");






// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length


// tslint:disable-next-line: max-line-length



const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: '',
        component: _modules_projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"],
        children: [
            {
                path: 'list',
                component: _modules_projects_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsListComponent"],
            },
            {
                path: 'new-project',
                component: _modules_projects_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_4__["NewProjectComponent"],
            },
            {
                path: ':projectId/:projectName',
                children: [
                    {
                        path: 'attempts',
                        component: _modules_projects_attempts_attempts_component__WEBPACK_IMPORTED_MODULE_3__["AttemptsComponent"],
                    },
                    {
                        path: 'reactions-collection',
                        component: _modules_projects_reactions_collection_reactions_collection_component__WEBPACK_IMPORTED_MODULE_6__["ReactionsCollectionComponent"],
                    },
                    {
                        path: 'workspace',
                        component: _modules_projects_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_5__["WorkspaceComponent"],
                    },
                    {
                        path: 'outcomes/:taskId',
                        component: _modules_projects_prediction_outcomes_prediction_outcomes_component__WEBPACK_IMPORTED_MODULE_7__["PredictionOutcomesComponent"],
                        data: {
                            mode: _prediction_outcomes_prediction_outcomes_enum__WEBPACK_IMPORTED_MODULE_8__["EOutcomesMode"].PREDICTION,
                        },
                    },
                    {
                        path: 'outcomes/:taskId/view',
                        component: _modules_projects_prediction_outcomes_prediction_outcomes_component__WEBPACK_IMPORTED_MODULE_7__["PredictionOutcomesComponent"],
                        data: {
                            mode: _prediction_outcomes_prediction_outcomes_enum__WEBPACK_IMPORTED_MODULE_8__["EOutcomesMode"].VIEW,
                        },
                    },
                    {
                        path: 'retrosynthesis',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! src/app/modules/retrosynthesis/retrosynthesis.module */ "Aad6")).then(m => m.RetrosynthesisModule),
                    },
                    {
                        path: 'retrosynthesis-collection',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! src/app/modules/retrosynthesis/retrosynthesis.module */ "Aad6")).then(m => m.RetrosynthesisModule),
                        data: {
                            header: 'Retrosynthesis Collection',
                            listType: _retrosynthesis_retrosynthesis_list_retrosynthesis_list_enum__WEBPACK_IMPORTED_MODULE_9__["ERetrosynthesisListType"].COLLECTION,
                        },
                    },
                    {
                        path: 'retrosynthesis-attempts',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! src/app/modules/retrosynthesis/retrosynthesis.module */ "Aad6")).then(m => m.RetrosynthesisModule),
                        data: {
                            header: 'Retrosynthesis Attempts',
                            listType: _retrosynthesis_retrosynthesis_list_retrosynthesis_list_enum__WEBPACK_IMPORTED_MODULE_9__["ERetrosynthesisListType"].ATTEMPTS,
                        },
                    },
                    {
                        path: 'synthesis-from-literature',
                        loadChildren: () => __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! src/app/modules/projects/synthesis-from-literature/synthesis-from-literature.module */ "ARaX")).then(m => m.SynthesisFromLiteratureModule),
                    },
                ],
            },
        ],
    },
];
let ProjectsRoutingModule = /*@__PURE__*/ (() => {
    class ProjectsRoutingModule {
    }
    ProjectsRoutingModule.ɵfac = function ProjectsRoutingModule_Factory(t) { return new (t || ProjectsRoutingModule)(); };
    ProjectsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ProjectsRoutingModule });
    ProjectsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return ProjectsRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ProjectsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();



/***/ }),

/***/ "YEdr":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/retrosynthesis/retrosynthesis-wizard/retrosynthesis-wizard.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: RetrosynthesisWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrosynthesisWizardComponent", function() { return RetrosynthesisWizardComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/api */ "wApl");
/* harmony import */ var _bitf_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitf/components */ "3lSO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_modal_close_button_modal_close_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/modal-close-button/modal-close-button.component */ "fj6H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_carbon_design_bx_slider_bx_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/carbon-design/bx-slider/bx-slider.component */ "h4aj");
/* harmony import */ var _retrosynthesis_wizard_textarea_retrosynthesis_wizard_textarea_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./retrosynthesis-wizard-textarea/retrosynthesis-wizard-textarea.component */ "aAdo");
/* harmony import */ var _shared_carbon_design_bx_tooltip_bx_tooltip_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/carbon-design/bx-tooltip/bx-tooltip.component */ "r8uK");
/* harmony import */ var _modules_projects_ketcher_ketcher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/projects/ketcher/ketcher.component */ "cuns");












const _c0 = ["ketcher"];
function RetrosynthesisWizardComponent_div_8_option_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const aiModel_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", aiModel_r6.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](aiModel_r6.name);
    }
}
function RetrosynthesisWizardComponent_div_8_div_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RetrosynthesisWizardComponent_div_8_div_13_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.parameters["enzymatic_only"].value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.parameters["enzymatic_only"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.parameters["enzymatic_only"].label);
    }
}
function RetrosynthesisWizardComponent_div_8_div_27_span_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function RetrosynthesisWizardComponent_div_8_div_27_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ibm-bx-slider", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function RetrosynthesisWizardComponent_div_8_div_27_Template_ibm_bx_slider_valueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.maxCost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RetrosynthesisWizardComponent_div_8_div_27_span_11_Template, 2, 0, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.retroWizardConfig.availability_pricing_threshold.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.retroWizardConfig.availability_pricing_threshold.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r4.retroWizardConfig.availability_pricing_threshold.min)("max", ctx_r4.retroWizardConfig.availability_pricing_threshold.max)("step", ctx_r4.retroWizardConfig.availability_pricing_threshold.step)("showMinLabel", false)("showMaxLabel", false)("showCurrentValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.retroWizardConfig.availability_pricing_threshold.max, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.retroWizardConfig.availability_pricing_threshold.max_more);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.maxCost, " ");
    }
}
function RetrosynthesisWizardComponent_div_8_div_28_div_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 55);
    }
}
function RetrosynthesisWizardComponent_div_8_div_28_div_18_div_3_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const paramKey_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.parameters[paramKey_r15].label);
    }
}
function RetrosynthesisWizardComponent_div_8_div_28_div_18_div_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ibm-bx-tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RetrosynthesisWizardComponent_div_8_div_28_div_18_div_3_ng_template_2_Template, 2, 1, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ibm-bx-slider", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function RetrosynthesisWizardComponent_div_8_div_28_div_18_div_3_Template_ibm_bx_slider_valueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const paramKey_r15 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r19.parameters[paramKey_r15].value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const paramKey_r15 = ctx.$implicit;
        const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.parameters[paramKey_r15].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r14.parameters[paramKey_r15].min)("max", ctx_r14.parameters[paramKey_r15].max)("step", ctx_r14.parameters[paramKey_r15].step)("value", ctx_r14.parameters[paramKey_r15].value);
    }
}
function RetrosynthesisWizardComponent_div_8_div_28_div_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RetrosynthesisWizardComponent_div_8_div_28_div_18_div_3_Template, 8, 5, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.parametersKeys);
    }
}
function RetrosynthesisWizardComponent_div_8_div_28_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Speed/Quality Tuning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "High quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ibm-bx-slider", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function RetrosynthesisWizardComponent_div_8_div_28_Template_ibm_bx_slider_valueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.speedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RetrosynthesisWizardComponent_div_8_div_28_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.onAdvancedCheckboxChange($event); })("ngModelChange", function RetrosynthesisWizardComponent_div_8_div_28_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.advancedOptionsActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Show Advanced Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RetrosynthesisWizardComponent_div_8_div_28_div_17_Template, 1, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RetrosynthesisWizardComponent_div_8_div_28_div_18_Template, 4, 1, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ibm-retrosynthesis-wizard-textarea", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openKetcher", function RetrosynthesisWizardComponent_div_8_div_28_Template_ibm_retrosynthesis_wizard_textarea_openKetcher_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.onOpenKetcher("exclude_substructures"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ibm-retrosynthesis-wizard-textarea", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openKetcher", function RetrosynthesisWizardComponent_div_8_div_28_Template_ibm_retrosynthesis_wizard_textarea_openKetcher_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.onOpenKetcher("exclude_smiles"); })("checkboxChanged", function RetrosynthesisWizardComponent_div_8_div_28_Template_ibm_retrosynthesis_wizard_textarea_checkboxChanged_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.onExcludeMoleculeCheckboxChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ibm-retrosynthesis-wizard-textarea", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openKetcher", function RetrosynthesisWizardComponent_div_8_div_28_Template_ibm_retrosynthesis_wizard_textarea_openKetcher_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.onOpenKetcher("available_smiles"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ibm--retro-wizard-main-slider-disabled", ctx_r5.advancedOptionsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r5.retroWizardConfig.speed.min)("max", ctx_r5.retroWizardConfig.speed.max)("step", ctx_r5.retroWizardConfig.speed.step)("disabled", ctx_r5.advancedOptionsActive)("showMinLabel", false)("showMaxLabel", false)("showCurrentValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.advancedOptionsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.advancedOptionsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.advancedOptionsActive && ctx_r5.parametersKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r5.smilesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checkboxCheckedOnInit", ctx_r5.smilesForm.get("exclude_target_molecule").value);
    }
}
function RetrosynthesisWizardComponent_div_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " We continuously update our AI models. As a default, the predictions are powered by the best version of our models. Other model releases can be selected with the dropdown menu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Choose AI model version");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RetrosynthesisWizardComponent_div_8_Template_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.aiModel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RetrosynthesisWizardComponent_div_8_option_10_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RetrosynthesisWizardComponent_div_8_div_13_Template, 4, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Choose Retrosynthesis Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RetrosynthesisWizardComponent_div_8_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.mode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Interactive Mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RetrosynthesisWizardComponent_div_8_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.mode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Automatic Mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RetrosynthesisWizardComponent_div_8_div_27_Template, 14, 11, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RetrosynthesisWizardComponent_div_8_div_28_Template, 26, 14, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RetrosynthesisWizardComponent_div_8_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RetrosynthesisWizardComponent_div_8_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.onGetRetrosynthesis(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Run retrosynthesis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.aiModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.aiModels);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.selectedAiModel == null ? null : ctx_r0.selectedAiModel.isEnzymatic);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isInteractive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isInteractive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.aiModel);
    }
}
function RetrosynthesisWizardComponent_div_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ibm-ketcher", null, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RetrosynthesisWizardComponent_div_9_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.closeKetcher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RetrosynthesisWizardComponent_div_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.onInsertSubstructure(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r35 || !_r35.ketcherInitialised);
    }
}
let RetrosynthesisWizardComponent = /*@__PURE__*/ (() => {
    class RetrosynthesisWizardComponent {
        constructor(fb, retrosynthesisService, aiModelsService, loaderService, router) {
            this.fb = fb;
            this.retrosynthesisService = retrosynthesisService;
            this.aiModelsService = aiModelsService;
            this.loaderService = loaderService;
            this.router = router;
            this.ketcherSmiles = '';
            this.ketcherActive = false;
            this.parameters = {};
            this.parametersKeys = [];
            this.advancedOptionsActive = false;
            this.mode = 'AUTOMATIC';
            this.aiModels = [];
        }
        ngOnInit() {
            this.loaderService.show();
            this.retrosynthesisService
                .getWizardConfig()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(response => {
                this.speedValue = response.content.speed.min;
                this.maxCost = response.content.availability_pricing_threshold.min;
                this.retroWizardConfig = response.content;
                this.prepareParameters();
                this.resetToDefaultParameters();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(() => {
                return this.aiModelsService.getAiModelsForRetrosynthesis();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(response => {
                this.aiModels = response.content.models;
                this.aiModel = (this.aiModels.find(m => m.isDefault) || { name: undefined }).name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => this.loaderService.hide()))
                .subscribe();
            this.initForm();
        }
        get selectedAiModel() {
            return this.aiModels.find(m => m.name === this.aiModel);
        }
        getConfigParametersValues() {
            return this.retroWizardConfig.speed.metaData.find((metadata) => metadata.value === this.speedValue);
        }
        prepareParameters() {
            Object.keys(this.retroWizardConfig).forEach(paramKey => {
                if (paramKey === 'speed') {
                    return;
                }
                this.parameters[paramKey] = this.retroWizardConfig[paramKey];
                this.parametersKeys.push(paramKey);
            });
        }
        resetToDefaultParameters() {
            const speedMetadata = this.getConfigParametersValues();
            if (!speedMetadata) {
                throw new Error(`Parameters values are missing for speed ${this.speedValue}`);
            }
            Object.keys(this.parameters).forEach(paramKey => {
                this.parameters[paramKey].value = speedMetadata.parameters[paramKey];
            });
        }
        onAdvancedCheckboxChange() {
            if (!this.advancedOptionsActive) {
                this.resetToDefaultParameters();
            }
        }
        onExcludeMoleculeCheckboxChange(event) {
            this.smilesForm.patchValue({
                exclude_target_molecule: event.target.checked,
            });
        }
        closeModal() { }
        initForm() {
            this.smilesForm = this.fb.group({
                exclude_substructures: [null],
                exclude_smiles: [null],
                available_smiles: [null],
                exclude_target_molecule: [true],
            });
        }
        onOpenKetcher(formControlName) {
            this.ketcherActive = true;
            this.currentFormControlName = formControlName;
            setTimeout(() => {
                this.ketcher.setSmiles([this.smilesForm.value[this.currentFormControlName]]);
            });
        }
        onInsertSubstructure() {
            this.smilesForm.patchValue({
                [this.currentFormControlName]: this.ketcher.smiles,
            });
            this.closeKetcher();
        }
        closeKetcher() {
            this.currentFormControlName = undefined;
            this.ketcherActive = false;
        }
        get isInteractive() {
            return this.mode === 'INTERACTIVE';
        }
        onGetRetrosynthesis() {
            this.loaderService.show();
            const body = {
                parameters: undefined,
                product: this.product,
                isInteractive: this.isInteractive,
                aiModel: this.aiModel,
            };
            if (!this.isInteractive) {
                body.parameters = this.smilesForm.value;
                if (this.advancedOptionsActive) {
                    this.parametersKeys.forEach(paramKey => {
                        body.parameters[paramKey] = this.parameters[paramKey].value;
                    });
                }
                else {
                    Object.assign(body.parameters, this.getConfigParametersValues().parameters);
                }
            }
            else {
                body.parameters = {
                    availability_pricing_threshold: this.maxCost,
                };
            }
            body.parameters.enzymatic_only =
                this.selectedAiModel.isEnzymatic && this.parameters['enzymatic_only'].value;
            this.retrosynthesisService
                .post({
                path: 'rs',
                body,
                queryParams: { projectId: this.projectId },
                isBodyRaw: true,
                relation: '',
            })
                .subscribe((response) => {
                const interactive = response.content.isInteractive;
                this.router.navigate([
                    '/projects',
                    this.projectId,
                    this.projectName,
                    'retrosynthesis',
                    interactive ? 'interactive' : undefined,
                    response.content.id,
                ].filter(e => e !== undefined));
                setTimeout(() => this.closeModal());
            }, () => {
                this.loaderService.hide();
            });
        }
    }
    RetrosynthesisWizardComponent.ɵfac = function RetrosynthesisWizardComponent_Factory(t) { return new (t || RetrosynthesisWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api__WEBPACK_IMPORTED_MODULE_3__["RetrosynthesisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api__WEBPACK_IMPORTED_MODULE_3__["AiModelsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bitf_components__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
    RetrosynthesisWizardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RetrosynthesisWizardComponent, selectors: [["ibm-retrosynthesis-wizard"]], viewQuery: function RetrosynthesisWizardComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ketcher = _t.first);
            }
        }, decls: 10, vars: 4, consts: [[1, "bx--grid", "ibm--retro-wizard", "h-100"], [1, "ibm--retro-wizard-close-button"], [1, "ibm--retro-wizard-header"], [1, "ibm--retro-wizard-container"], ["class", "bx--row ibm--retro-wizard-content", 4, "ngIf"], ["class", "ibm--retro-wizard-ketcher", 4, "ngIf"], [1, "bx--row", "ibm--retro-wizard-content"], [1, "bx--col-md-8"], [1, "bx--row"], [1, "mb-1"], [1, "my-05"], [1, "bx--select"], [1, "bx--select-input", 3, "ngModel", "ngModelChange"], ["class", "bx--select-option", 3, "value", 4, "ngFor", "ngForOf"], ["width", "10", "height", "5", "viewBox", "0 0 10 5", "fill-rule", "evenodd", 1, "bx--select__arrow"], ["d", "M10 0L5 5 0 0z"], ["class", "mt-2", 4, "ngIf"], [1, "bx--row", "mt-2"], [1, "mb-2"], [1, "bx--radio-button-group"], ["id", "interactive", "type", "radio", "value", "red", "name", "radio-button", "value", "INTERACTIVE", 1, "bx--radio-button", 3, "ngModel", "ngModelChange"], ["for", "interactive", 1, "bx--radio-button__label"], [1, "bx--radio-button__appearance"], ["id", "automatic", "type", "radio", "value", "red", "name", "radio-button", "value", "AUTOMATIC", 1, "bx--radio-button", 3, "ngModel", "ngModelChange"], ["for", "automatic", 1, "bx--radio-button__label"], [4, "ngIf"], [1, "ibm--retro-wizard-footer"], ["type", "button", 1, "bx--btn", "bx--btn--secondary", 3, "click"], ["type", "button", 1, "bx--btn", "bx--btn--primary", "ml-1", "mr-2", 3, "disabled", "click"], [1, "bx--select-option", 3, "value"], [1, "mt-2"], ["id", "bx--checkbox-enzymatic", "type", "checkbox", "aria-checked", "mixed", 1, "bx--checkbox", 3, "ngModel", "ngModelChange"], ["for", "bx--checkbox-enzymatic", 1, "bx--checkbox-label"], [1, "w-100", "mt-2"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1"], [3, "min", "max", "step", "showMinLabel", "showMaxLabel", "showCurrentValue", "valueChange"], [1, "ml-1", "slider-text"], [1, "bx--col-md-8", "ibm--retro-wizard-main-slider"], [1, "bx--row", "justify-content-between", "mt-1", "ibm--retro-wizard-main-slider-labels"], [1, "px-1"], [1, "w-100", "mt-1"], [3, "min", "max", "step", "disabled", "showMinLabel", "showMaxLabel", "showCurrentValue", "valueChange"], [1, "bx--row", "mt-2", "ibm--retro-wizard-checkbox"], [1, "bx--col-md-8", "bx--form-item", "bx--checkbox-wrapper"], ["id", "bx--checkbox-ind", "type", "checkbox", "value", "new", "name", "checkbox", "aria-checked", "mixed", 1, "bx--checkbox", 3, "ngModel", "change", "ngModelChange"], ["for", "bx--checkbox-ind", 1, "bx--checkbox-label"], ["class", "ibm--retro-wizard-divider mt-1", 4, "ngIf"], ["class", "bx--row", 4, "ngIf"], [3, "formGroup"], [1, "ibm--retro-wizard-textarea-avoid"], ["label", "Remove commercial molecules containing substructure", "tooltip", "List all substructures used to prune the set of commercial molecules", "formControlName", "exclude_substructures", 3, "openKetcher"], [1, "ibm--retro-wizard-textarea"], ["label", "Remove commercial molecules", "tooltip", "List all molecules to be removed from the set of commercially available molecules", "checkboxLabel", "Exclude target molecule", "formControlName", "exclude_smiles", 1, "ibm--retro-wizard-texarea", 3, "checkboxCheckedOnInit", "openKetcher", "checkboxChanged"], ["label", "Use as only available starting materials", "tooltip", "The specified set of molecules plus an additional set of 2000 very common solvents/reagents is used instead of the entire set of commercially available molecules on eMolecules", "formControlName", "available_smiles", 1, "ibm--retro-wizard-texarea", 3, "openKetcher"], [1, "ibm--retro-wizard-divider", "mt-1"], [1, "ibm--retro-wizard-advenced"], ["class", "w-100 mb-1", 4, "ngFor", "ngForOf"], [1, "w-100", "mb-1"], ["tooltipTrigger", ""], [1, "w-100"], [3, "min", "max", "step", "value", "valueChange"], [1, "ibm--retro-wizard-ketcher"], ["ketcher", ""], [1, "ibm--retro-wizard-ketcher-buttons"]], template: function RetrosynthesisWizardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ibm-modal-close-button", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Run retrosynthesis");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Setting the parameters for the result you want to have");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RetrosynthesisWizardComponent_div_8_Template, 34, 8, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RetrosynthesisWizardComponent_div_9_Template, 8, 1, "div", 5);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", ctx.ketcherActive);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.retroWizardConfig);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ketcherActive);
            }
        }, directives: [_shared_components_modal_close_button_modal_close_button_component__WEBPACK_IMPORTED_MODULE_6__["ModalCloseButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _shared_carbon_design_bx_slider_bx_slider_component__WEBPACK_IMPORTED_MODULE_8__["BxSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _retrosynthesis_wizard_textarea_retrosynthesis_wizard_textarea_component__WEBPACK_IMPORTED_MODULE_9__["RetrosynthesisWizardTextareaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _shared_carbon_design_bx_tooltip_bx_tooltip_component__WEBPACK_IMPORTED_MODULE_10__["BxTooltipComponent"], _modules_projects_ketcher_ketcher_component__WEBPACK_IMPORTED_MODULE_11__["KetcherComponent"]], styles: [".ibm--retro-wizard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media (max-width: 820px) {\n  .ibm--retro-wizard-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (min-width: 820px) {\n  .ibm--retro-wizard-content[_ngcontent-%COMP%] {\n    width: 800px;\n    margin: auto;\n  }\n}\n.ibm--retro-wizard-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 13rem;\n  margin-bottom: 7.5rem;\n  overflow-y: auto;\n}\n.ibm--retro-wizard-header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 12.5rem;\n  padding-top: 4.25rem;\n  border-top: solid 4px #0f62fe;\n  text-align: center;\n  background-color: #fff;\n  z-index: 9000;\n}\n.ibm--retro-wizard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ibm--retro-wizard-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  color: #161616;\n}\n.ibm--retro-wizard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3.375rem;\n  line-height: 4.25rem;\n  font-weight: 300;\n}\n.ibm--retro-wizard-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.ibm--retro-wizard-main-slider-labels[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.125rem;\n  color: #161616;\n}\n.ibm--retro-wizard-main-slider-disabled[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.ibm--retro-wizard-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #161616;\n}\n.ibm--retro-wizard-advenced[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  background-color: #f4f4f4;\n  padding: 1.125rem 3.125rem;\n}\n.ibm--retro-wizard-textarea[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n.ibm--retro-wizard-textarea-avoid[_ngcontent-%COMP%] {\n  margin-top: 3.0625rem;\n}\n.ibm--retro-wizard-ketcher-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n  padding-top: 2rem;\n  padding-right: 2rem;\n}\n.ibm--retro-wizard-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  background-color: #f4f4f4;\n}\n.ibm--retro-wizard-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5.5rem;\n  background-color: #f4f4f4;\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  align-items: center;\n  justify-content: flex-end;\n}\n.ibm--retro-wizard-close-button[_ngcontent-%COMP%]     button {\n  z-index: 9001;\n  position: fixed;\n  top: 30px;\n  right: 40px;\n}\n.ibm--retro-wizard[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%] {\n  width: 3.65rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  background: #f4f4f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JldHJvc3ludGhlc2lzLXdpemFyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zZXR0aW5ncy9fY29sb3JzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FyYm9uLWNvbXBvbmVudHMvc2Nzcy9nbG9iYWxzL3Njc3MvdmVuZG9yL0BjYXJib24vZWxlbWVudHMvc2Nzcy90aGVtZXMvZ2VuZXJhdGVkL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHSTtFQURGO0lBRUksV0FBQTtFQUFKO0FBQ0Y7QUFDSTtFQUpGO0lBS0ksWUFBQTtJQUNBLFlBQUE7RUFFSjtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JDOUJJO0VEK0JKLGFBQUE7QUFFSjtBQURJOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNFY007QUZYWjtBQURJO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBR047QUFESTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUdOO0FBRU07RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0VISTtBRkdaO0FBR0k7RUFDRSxZQUFBO0FBRE47QUFLSTtFQUNFLG1CQUFBO0VBQ0EsY0ViTTtBRlVaO0FBTUU7RUFDRSxnQkFBQTtFQUNBLHlCRXhCYztFRnlCZCwwQkFBQTtBQUpKO0FBTUU7RUFDRSxrQkFBQTtBQUpKO0FBS0k7RUFDRSxxQkFBQTtBQUhOO0FBT0k7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTE47QUFRRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJFNUNjO0FGc0NsQjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkVqRGM7RUZrRGQsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBTko7QUFVTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFSUjtBQWFFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkU3RWM7QUZrRWxCIiwiZmlsZSI6InJldHJvc3ludGhlc2lzLXdpemFyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvc3R5bGVzL3NldHRpbmdzL3NldHRpbmdzLnNjc3MnO1xuXG4uaWJtLS1yZXRyby13aXphcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmLWNvbnRlbnQge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MjBweCkge1xuICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgfVxuICAmLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNy41cmVtO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgJi1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDQuMjVyZW07XG4gICAgYm9yZGVyLXRvcDogc29saWQgNHB4ICRpbnRlcmFjdGl2ZS0wMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIHotaW5kZXg6IDkwMDA7XG4gICAgaDIsXG4gICAgaDMge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjb2xvcjogJHRleHQtMDE7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMy4zNzVyZW07XG4gICAgICBsaW5lLWhlaWdodDogNC4yNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgfVxuICB9XG4gICYtbWFpbi1zbGlkZXIge1xuICAgICYtbGFiZWxzIHtcbiAgICAgIGRpdiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICAgICAgY29sb3I6ICR0ZXh0LTAxO1xuICAgICAgfVxuICAgIH1cbiAgICAmLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gIH1cbiAgJi1jaGVja2JveCB7XG4gICAgbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiAkdGV4dC0wMTtcbiAgICB9XG4gIH1cbiAgJi1hZHZlbmNlZCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdWktYmFja2dyb3VuZDtcbiAgICBwYWRkaW5nOiAxLjEyNXJlbSAzLjEyNXJlbTtcbiAgfVxuICAmLXRleHRhcmVhIHtcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgJi1hdm9pZCB7XG4gICAgICBtYXJnaW4tdG9wOiAzLjA2MjVyZW07XG4gICAgfVxuICB9XG4gICYta2V0Y2hlciB7XG4gICAgJi1idXR0b25zIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgfVxuICB9XG4gICYtZGl2aWRlciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVpLWJhY2tncm91bmQ7XG4gIH1cbiAgJi1mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1aS1iYWNrZ3JvdW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gICYtY2xvc2UtYnV0dG9uIHtcbiAgICA6Om5nLWRlZXAge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgei1pbmRleDogOTAwMTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zbGlkZXItdGV4dCB7XG4gICAgd2lkdGg6IDMuNjVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZDogJHVpLWJhY2tncm91bmQ7XG4gIH1cbn1cbiIsIiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzAwMDtcbiIsIi8vIENvZGUgZ2VuZXJhdGVkIGJ5IEBjYXJib24vdGhlbWVzLiBETyBOT1QgRURJVC5cbi8vXG4vLyBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTgsIDIwMTlcbi8vXG4vLyBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUtMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vL1xuXG5AaW1wb3J0ICcuL3RoZW1lcyc7XG5cbi8vLyBEZWZpbmUgdGhlbWUgdmFyaWFibGVzIGZyb20gYSBtYXAgb2YgdG9rZW5zXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAcGFyYW0ge01hcH0gJHRoZW1lIFskY2FyYm9uLS10aGVtZV0gLSBNYXAgb2YgdGhlbWUgdG9rZW5zXG4vLy8gQHBhcmFtIHtCb29sfSAkZW1pdC1jdXN0b20tcHJvcGVydGllcyBbZmFsc2VdIC0gT3V0cHV0IENTUyBDdXN0b20gUHJvcGVydGllcyBmb3IgdGhlbWUgdG9rZW5zXG4vLy8gQGNvbnRlbnQgUGFzcyBpbiB5b3VyIGN1c3RvbSBkZWNsYXJhdGlvbiBibG9ja3MgdG8gYmUgdXNlZCBhZnRlciB0aGUgdG9rZW4gbWFwcyBzZXQgdGhlbWluZyB2YXJpYWJsZXMuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzXG4vLy8gICAvLyBEZWZhdWx0IHVzYWdlXG4vLy8gICBAaW5jbHVkZSBjYXJib24tLXRoZW1lKCk7XG4vLy9cbi8vLyAgIC8vIEFsdGVybmF0ZSBzdHlsaW5nIChub3Qgd2hpdGUgdGhlbWUpXG4vLy8gICBAaW5jbHVkZSBjYXJib24tLXRoZW1lKCRjYXJib24tLXRoZW1lLS1nOTApIHtcbi8vLyAgICAgLy8gZGVjbGFyYXRpb25zLi4uXG4vLy8gICB9XG4vLy9cbi8vLyAgIC8vIElubGluZSBzdHlsaW5nXG4vLy8gICBAaW5jbHVkZSBjYXJib24tLXRoZW1lKCRjYXJib24tLXRoZW1lLS1nOTApIHtcbi8vLyAgICAgLm15LWRhcmstdGhlbWUge1xuLy8vICAgICAgIC8vIGRlY2xhcmF0aW9ucy4uLlxuLy8vICAgICB9XG4vLy8gICB9XG4vLy9cbi8vLyBAZ3JvdXAgQGNhcmJvbi90aGVtZXNcbkBtaXhpbiBjYXJib24tLXRoZW1lKFxuICAkdGhlbWU6ICRjYXJib24tLXRoZW1lLFxuICAkZW1pdC1jdXN0b20tcHJvcGVydGllczogZmFsc2UsXG4gICRlbWl0LWRpZmZlcmVuY2U6IGZhbHNlXG4pIHtcbiAgJHBhcmVudC1jYXJib24tdGhlbWU6ICRjYXJib24tLXRoZW1lO1xuICAkY2FyYm9uLS10aGVtZTogJHRoZW1lICFnbG9iYWw7XG4gICRpbnRlcmFjdGl2ZS0wMTogbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wMScpICFnbG9iYWw7XG4gICRpbnRlcmFjdGl2ZS0wMjogbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wMicpICFnbG9iYWw7XG4gICRpbnRlcmFjdGl2ZS0wMzogbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wMycpICFnbG9iYWw7XG4gICRpbnRlcmFjdGl2ZS0wNDogbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wNCcpICFnbG9iYWw7XG4gICR1aS1iYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ3VpLWJhY2tncm91bmQnKSAhZ2xvYmFsO1xuICAkdWktMDE6IG1hcC1nZXQoJHRoZW1lLCAndWktMDEnKSAhZ2xvYmFsO1xuICAkdWktMDI6IG1hcC1nZXQoJHRoZW1lLCAndWktMDInKSAhZ2xvYmFsO1xuICAkdWktMDM6IG1hcC1nZXQoJHRoZW1lLCAndWktMDMnKSAhZ2xvYmFsO1xuICAkdWktMDQ6IG1hcC1nZXQoJHRoZW1lLCAndWktMDQnKSAhZ2xvYmFsO1xuICAkdWktMDU6IG1hcC1nZXQoJHRoZW1lLCAndWktMDUnKSAhZ2xvYmFsO1xuICAkdGV4dC0wMTogbWFwLWdldCgkdGhlbWUsICd0ZXh0LTAxJykgIWdsb2JhbDtcbiAgJHRleHQtMDI6IG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wMicpICFnbG9iYWw7XG4gICR0ZXh0LTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtMDMnKSAhZ2xvYmFsO1xuICAkdGV4dC0wNDogbWFwLWdldCgkdGhlbWUsICd0ZXh0LTA0JykgIWdsb2JhbDtcbiAgJHRleHQtMDU6IG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wNScpICFnbG9iYWw7XG4gICR0ZXh0LWVycm9yOiBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtZXJyb3InKSAhZ2xvYmFsO1xuICAkaWNvbi0wMTogbWFwLWdldCgkdGhlbWUsICdpY29uLTAxJykgIWdsb2JhbDtcbiAgJGljb24tMDI6IG1hcC1nZXQoJHRoZW1lLCAnaWNvbi0wMicpICFnbG9iYWw7XG4gICRpY29uLTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tMDMnKSAhZ2xvYmFsO1xuICAkbGluay0wMTogbWFwLWdldCgkdGhlbWUsICdsaW5rLTAxJykgIWdsb2JhbDtcbiAgJGxpbmstMDI6IG1hcC1nZXQoJHRoZW1lLCAnbGluay0wMicpICFnbG9iYWw7XG4gICRpbnZlcnNlLWxpbms6IG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1saW5rJykgIWdsb2JhbDtcbiAgJGZpZWxkLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZpZWxkLTAxJykgIWdsb2JhbDtcbiAgJGZpZWxkLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZpZWxkLTAyJykgIWdsb2JhbDtcbiAgJGludmVyc2UtMDE6IG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS0wMScpICFnbG9iYWw7XG4gICRpbnZlcnNlLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtMDInKSAhZ2xvYmFsO1xuICAkc3VwcG9ydC0wMTogbWFwLWdldCgkdGhlbWUsICdzdXBwb3J0LTAxJykgIWdsb2JhbDtcbiAgJHN1cHBvcnQtMDI6IG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wMicpICFnbG9iYWw7XG4gICRzdXBwb3J0LTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ3N1cHBvcnQtMDMnKSAhZ2xvYmFsO1xuICAkc3VwcG9ydC0wNDogbWFwLWdldCgkdGhlbWUsICdzdXBwb3J0LTA0JykgIWdsb2JhbDtcbiAgJGludmVyc2Utc3VwcG9ydC0wMTogbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDEnKSAhZ2xvYmFsO1xuICAkaW52ZXJzZS1zdXBwb3J0LTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2Utc3VwcG9ydC0wMicpICFnbG9iYWw7XG4gICRpbnZlcnNlLXN1cHBvcnQtMDM6IG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1zdXBwb3J0LTAzJykgIWdsb2JhbDtcbiAgJGludmVyc2Utc3VwcG9ydC0wNDogbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDQnKSAhZ2xvYmFsO1xuICAkb3ZlcmxheS0wMTogbWFwLWdldCgkdGhlbWUsICdvdmVybGF5LTAxJykgIWdsb2JhbDtcbiAgJGRhbmdlci0wMTogbWFwLWdldCgkdGhlbWUsICdkYW5nZXItMDEnKSAhZ2xvYmFsO1xuICAkZGFuZ2VyLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2Rhbmdlci0wMicpICFnbG9iYWw7XG4gICRmb2N1czogbWFwLWdldCgkdGhlbWUsICdmb2N1cycpICFnbG9iYWw7XG4gICRpbnZlcnNlLWZvY3VzLXVpOiBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtZm9jdXMtdWknKSAhZ2xvYmFsO1xuICAkaG92ZXItcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsICdob3Zlci1wcmltYXJ5JykgIWdsb2JhbDtcbiAgJGFjdGl2ZS1wcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS1wcmltYXJ5JykgIWdsb2JhbDtcbiAgJGhvdmVyLXByaW1hcnktdGV4dDogbWFwLWdldCgkdGhlbWUsICdob3Zlci1wcmltYXJ5LXRleHQnKSAhZ2xvYmFsO1xuICAkaG92ZXItc2Vjb25kYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXNlY29uZGFyeScpICFnbG9iYWw7XG4gICRhY3RpdmUtc2Vjb25kYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS1zZWNvbmRhcnknKSAhZ2xvYmFsO1xuICAkaG92ZXItdGVydGlhcnk6IG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItdGVydGlhcnknKSAhZ2xvYmFsO1xuICAkYWN0aXZlLXRlcnRpYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS10ZXJ0aWFyeScpICFnbG9iYWw7XG4gICRob3Zlci11aTogbWFwLWdldCgkdGhlbWUsICdob3Zlci11aScpICFnbG9iYWw7XG4gICRob3Zlci1saWdodC11aTogbWFwLWdldCgkdGhlbWUsICdob3Zlci1saWdodC11aScpICFnbG9iYWw7XG4gICRob3Zlci1zZWxlY3RlZC11aTogbWFwLWdldCgkdGhlbWUsICdob3Zlci1zZWxlY3RlZC11aScpICFnbG9iYWw7XG4gICRhY3RpdmUtdWk6IG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLXVpJykgIWdsb2JhbDtcbiAgJGFjdGl2ZS1saWdodC11aTogbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtbGlnaHQtdWknKSAhZ2xvYmFsO1xuICAkc2VsZWN0ZWQtdWk6IG1hcC1nZXQoJHRoZW1lLCAnc2VsZWN0ZWQtdWknKSAhZ2xvYmFsO1xuICAkc2VsZWN0ZWQtbGlnaHQtdWk6IG1hcC1nZXQoJHRoZW1lLCAnc2VsZWN0ZWQtbGlnaHQtdWknKSAhZ2xvYmFsO1xuICAkaW52ZXJzZS1ob3Zlci11aTogbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLWhvdmVyLXVpJykgIWdsb2JhbDtcbiAgJGhvdmVyLWRhbmdlcjogbWFwLWdldCgkdGhlbWUsICdob3Zlci1kYW5nZXInKSAhZ2xvYmFsO1xuICAkYWN0aXZlLWRhbmdlcjogbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtZGFuZ2VyJykgIWdsb2JhbDtcbiAgJGhvdmVyLXJvdzogbWFwLWdldCgkdGhlbWUsICdob3Zlci1yb3cnKSAhZ2xvYmFsO1xuICAkdmlzaXRlZC1saW5rOiBtYXAtZ2V0KCR0aGVtZSwgJ3Zpc2l0ZWQtbGluaycpICFnbG9iYWw7XG4gICRkaXNhYmxlZC0wMTogbWFwLWdldCgkdGhlbWUsICdkaXNhYmxlZC0wMScpICFnbG9iYWw7XG4gICRkaXNhYmxlZC0wMjogbWFwLWdldCgkdGhlbWUsICdkaXNhYmxlZC0wMicpICFnbG9iYWw7XG4gICRkaXNhYmxlZC0wMzogbWFwLWdldCgkdGhlbWUsICdkaXNhYmxlZC0wMycpICFnbG9iYWw7XG4gICRoaWdobGlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnaGlnaGxpZ2h0JykgIWdsb2JhbDtcbiAgJGRlY29yYXRpdmUtMDE6IG1hcC1nZXQoJHRoZW1lLCAnZGVjb3JhdGl2ZS0wMScpICFnbG9iYWw7XG4gICRidXR0b24tc2VwYXJhdG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2J1dHRvbi1zZXBhcmF0b3InKSAhZ2xvYmFsO1xuICAkc2tlbGV0b24tMDE6IG1hcC1nZXQoJHRoZW1lLCAnc2tlbGV0b24tMDEnKSAhZ2xvYmFsO1xuICAkc2tlbGV0b24tMDI6IG1hcC1nZXQoJHRoZW1lLCAnc2tlbGV0b24tMDInKSAhZ2xvYmFsO1xuICAkYnJhbmQtMDE6IG1hcC1nZXQoJHRoZW1lLCAnYnJhbmQtMDEnKSAhZ2xvYmFsO1xuICAkYnJhbmQtMDI6IG1hcC1nZXQoJHRoZW1lLCAnYnJhbmQtMDInKSAhZ2xvYmFsO1xuICAkYnJhbmQtMDM6IG1hcC1nZXQoJHRoZW1lLCAnYnJhbmQtMDMnKSAhZ2xvYmFsO1xuICAkYWN0aXZlLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS0wMScpICFnbG9iYWw7XG4gICRob3Zlci1maWVsZDogbWFwLWdldCgkdGhlbWUsICdob3Zlci1maWVsZCcpICFnbG9iYWw7XG4gICRkYW5nZXI6IG1hcC1nZXQoJHRoZW1lLCAnZGFuZ2VyJykgIWdsb2JhbDtcbiAgJGNhcHRpb24tMDE6IG1hcC1nZXQoJHRoZW1lLCAnY2FwdGlvbi0wMScpICFnbG9iYWw7XG4gICRsYWJlbC0wMTogbWFwLWdldCgkdGhlbWUsICdsYWJlbC0wMScpICFnbG9iYWw7XG4gICRoZWxwZXItdGV4dC0wMTogbWFwLWdldCgkdGhlbWUsICdoZWxwZXItdGV4dC0wMScpICFnbG9iYWw7XG4gICRib2R5LXNob3J0LTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvZHktc2hvcnQtMDEnKSAhZ2xvYmFsO1xuICAkYm9keS1sb25nLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvZHktbG9uZy0wMScpICFnbG9iYWw7XG4gICRib2R5LXNob3J0LTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvZHktc2hvcnQtMDInKSAhZ2xvYmFsO1xuICAkYm9keS1sb25nLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvZHktbG9uZy0wMicpICFnbG9iYWw7XG4gICRjb2RlLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvZGUtMDEnKSAhZ2xvYmFsO1xuICAkY29kZS0wMjogbWFwLWdldCgkdGhlbWUsICdjb2RlLTAyJykgIWdsb2JhbDtcbiAgJGhlYWRpbmctMDE6IG1hcC1nZXQoJHRoZW1lLCAnaGVhZGluZy0wMScpICFnbG9iYWw7XG4gICRwcm9kdWN0aXZlLWhlYWRpbmctMDE6IG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTAxJykgIWdsb2JhbDtcbiAgJGhlYWRpbmctMDI6IG1hcC1nZXQoJHRoZW1lLCAnaGVhZGluZy0wMicpICFnbG9iYWw7XG4gICRwcm9kdWN0aXZlLWhlYWRpbmctMDI6IG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTAyJykgIWdsb2JhbDtcbiAgJHByb2R1Y3RpdmUtaGVhZGluZy0wMzogbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDMnKSAhZ2xvYmFsO1xuICAkcHJvZHVjdGl2ZS1oZWFkaW5nLTA0OiBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNCcpICFnbG9iYWw7XG4gICRwcm9kdWN0aXZlLWhlYWRpbmctMDU6IG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTA1JykgIWdsb2JhbDtcbiAgJHByb2R1Y3RpdmUtaGVhZGluZy0wNjogbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDYnKSAhZ2xvYmFsO1xuICAkcHJvZHVjdGl2ZS1oZWFkaW5nLTA3OiBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNycpICFnbG9iYWw7XG4gICRleHByZXNzaXZlLWhlYWRpbmctMDE6IG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1oZWFkaW5nLTAxJykgIWdsb2JhbDtcbiAgJGV4cHJlc3NpdmUtaGVhZGluZy0wMjogbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLWhlYWRpbmctMDInKSAhZ2xvYmFsO1xuICAkZXhwcmVzc2l2ZS1oZWFkaW5nLTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtaGVhZGluZy0wMycpICFnbG9iYWw7XG4gICRleHByZXNzaXZlLWhlYWRpbmctMDQ6IG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1oZWFkaW5nLTA0JykgIWdsb2JhbDtcbiAgJGV4cHJlc3NpdmUtaGVhZGluZy0wNTogbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLWhlYWRpbmctMDUnKSAhZ2xvYmFsO1xuICAkZXhwcmVzc2l2ZS1oZWFkaW5nLTA2OiBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtaGVhZGluZy0wNicpICFnbG9iYWw7XG4gICRleHByZXNzaXZlLXBhcmFncmFwaC0wMTogbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLXBhcmFncmFwaC0wMScpICFnbG9iYWw7XG4gICRxdW90YXRpb24tMDE6IG1hcC1nZXQoJHRoZW1lLCAncXVvdGF0aW9uLTAxJykgIWdsb2JhbDtcbiAgJHF1b3RhdGlvbi0wMjogbWFwLWdldCgkdGhlbWUsICdxdW90YXRpb24tMDInKSAhZ2xvYmFsO1xuICAkZGlzcGxheS0wMTogbWFwLWdldCgkdGhlbWUsICdkaXNwbGF5LTAxJykgIWdsb2JhbDtcbiAgJGRpc3BsYXktMDI6IG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheS0wMicpICFnbG9iYWw7XG4gICRkaXNwbGF5LTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc3BsYXktMDMnKSAhZ2xvYmFsO1xuICAkZGlzcGxheS0wNDogbWFwLWdldCgkdGhlbWUsICdkaXNwbGF5LTA0JykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMDE6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wMScpICFnbG9iYWw7XG4gICRzcGFjaW5nLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDInKSAhZ2xvYmFsO1xuICAkc3BhY2luZy0wMzogbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTAzJykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMDQ6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wNCcpICFnbG9iYWw7XG4gICRzcGFjaW5nLTA1OiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDUnKSAhZ2xvYmFsO1xuICAkc3BhY2luZy0wNjogbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA2JykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMDc6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wNycpICFnbG9iYWw7XG4gICRzcGFjaW5nLTA4OiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDgnKSAhZ2xvYmFsO1xuICAkc3BhY2luZy0wOTogbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA5JykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMTA6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0xMCcpICFnbG9iYWw7XG4gICRzcGFjaW5nLTExOiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMTEnKSAhZ2xvYmFsO1xuICAkc3BhY2luZy0xMjogbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTEyJykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMTM6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0xMycpICFnbG9iYWw7XG4gICRmbHVpZC1zcGFjaW5nLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZsdWlkLXNwYWNpbmctMDEnKSAhZ2xvYmFsO1xuICAkZmx1aWQtc3BhY2luZy0wMjogbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTAyJykgIWdsb2JhbDtcbiAgJGZsdWlkLXNwYWNpbmctMDM6IG1hcC1nZXQoJHRoZW1lLCAnZmx1aWQtc3BhY2luZy0wMycpICFnbG9iYWw7XG4gICRmbHVpZC1zcGFjaW5nLTA0OiBtYXAtZ2V0KCR0aGVtZSwgJ2ZsdWlkLXNwYWNpbmctMDQnKSAhZ2xvYmFsO1xuICAkbGF5b3V0LTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wMScpICFnbG9iYWw7XG4gICRsYXlvdXQtMDI6IG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTAyJykgIWdsb2JhbDtcbiAgJGxheW91dC0wMzogbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDMnKSAhZ2xvYmFsO1xuICAkbGF5b3V0LTA0OiBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wNCcpICFnbG9iYWw7XG4gICRsYXlvdXQtMDU6IG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTA1JykgIWdsb2JhbDtcbiAgJGxheW91dC0wNjogbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDYnKSAhZ2xvYmFsO1xuICAkbGF5b3V0LTA3OiBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wNycpICFnbG9iYWw7XG4gICRjb250YWluZXItMDE6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTAxJykgIWdsb2JhbDtcbiAgJGNvbnRhaW5lci0wMjogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDInKSAhZ2xvYmFsO1xuICAkY29udGFpbmVyLTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wMycpICFnbG9iYWw7XG4gICRjb250YWluZXItMDQ6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTA0JykgIWdsb2JhbDtcbiAgJGNvbnRhaW5lci0wNTogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDUnKSAhZ2xvYmFsO1xuICAkaWNvbi1zaXplLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tc2l6ZS0wMScpICFnbG9iYWw7XG4gICRpY29uLXNpemUtMDI6IG1hcC1nZXQoJHRoZW1lLCAnaWNvbi1zaXplLTAyJykgIWdsb2JhbDtcblxuICBAaWYgZ2xvYmFsLXZhcmlhYmxlLWV4aXN0cygnZmVhdHVyZS1mbGFncycpIGFuZFxuICAgIG1hcC1nZXQoJGZlYXR1cmUtZmxhZ3MsICdlbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzJylcbiAge1xuICAgICRpbnRlcmFjdGl2ZS0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pbnRlcmFjdGl2ZS0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaW50ZXJhY3RpdmUtMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW50ZXJhY3RpdmUtMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludGVyYWN0aXZlLTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGludGVyYWN0aXZlLTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWludGVyYWN0aXZlLTAzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnRlcmFjdGl2ZS0wNDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pbnRlcmFjdGl2ZS0wNCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDQnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdWktYmFja2dyb3VuZDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS11aS1iYWNrZ3JvdW5kLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd1aS1iYWNrZ3JvdW5kJylcbiAgICApICFnbG9iYWw7XG4gICAgJHVpLTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXVpLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd1aS0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR1aS0wMjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS11aS0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndWktMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdWktMDM6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdWktMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTAzJylcbiAgICApICFnbG9iYWw7XG4gICAgJHVpLTA0OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXVpLTA0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd1aS0wNCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR1aS0wNTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS11aS0wNSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndWktMDUnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdGV4dC0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS10ZXh0LTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd0ZXh0LTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJHRleHQtMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdGV4dC0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR0ZXh0LTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXRleHQtMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdGV4dC0wNDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS10ZXh0LTA0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd0ZXh0LTA0JylcbiAgICApICFnbG9iYWw7XG4gICAgJHRleHQtMDU6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdGV4dC0wNSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wNScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR0ZXh0LWVycm9yOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXRleHQtZXJyb3IsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtZXJyb3InKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaWNvbi0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pY29uLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpY29uLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGljb24tMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taWNvbi0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaWNvbi0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpY29uLTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWljb24tMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkbGluay0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1saW5rLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdsaW5rLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGxpbmstMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tbGluay0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnbGluay0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnZlcnNlLWxpbms6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW52ZXJzZS1saW5rLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLWxpbmsnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZmllbGQtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZmllbGQtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ZpZWxkLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGZpZWxkLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWZpZWxkLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdmaWVsZC0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnZlcnNlLTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWludmVyc2UtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaW52ZXJzZS0wMjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pbnZlcnNlLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJHN1cHBvcnQtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3VwcG9ydC0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzdXBwb3J0LTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXN1cHBvcnQtMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3N1cHBvcnQtMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3VwcG9ydC0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zdXBwb3J0LTAzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzdXBwb3J0LTAzJylcbiAgICApICFnbG9iYWw7XG4gICAgJHN1cHBvcnQtMDQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3VwcG9ydC0wNCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wNCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnZlcnNlLXN1cHBvcnQtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW52ZXJzZS1zdXBwb3J0LTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaW52ZXJzZS1zdXBwb3J0LTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWludmVyc2Utc3VwcG9ydC0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1zdXBwb3J0LTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGludmVyc2Utc3VwcG9ydC0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pbnZlcnNlLXN1cHBvcnQtMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2Utc3VwcG9ydC0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnZlcnNlLXN1cHBvcnQtMDQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW52ZXJzZS1zdXBwb3J0LTA0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDQnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkb3ZlcmxheS0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1vdmVybGF5LTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdvdmVybGF5LTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGRhbmdlci0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1kYW5nZXItMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2Rhbmdlci0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRkYW5nZXItMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZGFuZ2VyLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdkYW5nZXItMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZm9jdXM6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZm9jdXMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ZvY3VzJylcbiAgICApICFnbG9iYWw7XG4gICAgJGludmVyc2UtZm9jdXMtdWk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW52ZXJzZS1mb2N1cy11aSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1mb2N1cy11aScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRob3Zlci1wcmltYXJ5OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWhvdmVyLXByaW1hcnksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXByaW1hcnknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYWN0aXZlLXByaW1hcnk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tYWN0aXZlLXByaW1hcnksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS1wcmltYXJ5JylcbiAgICApICFnbG9iYWw7XG4gICAgJGhvdmVyLXByaW1hcnktdGV4dDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1ob3Zlci1wcmltYXJ5LXRleHQsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXByaW1hcnktdGV4dCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRob3Zlci1zZWNvbmRhcnk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taG92ZXItc2Vjb25kYXJ5LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1zZWNvbmRhcnknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYWN0aXZlLXNlY29uZGFyeTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1hY3RpdmUtc2Vjb25kYXJ5LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtc2Vjb25kYXJ5JylcbiAgICApICFnbG9iYWw7XG4gICAgJGhvdmVyLXRlcnRpYXJ5OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWhvdmVyLXRlcnRpYXJ5LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci10ZXJ0aWFyeScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRhY3RpdmUtdGVydGlhcnk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tYWN0aXZlLXRlcnRpYXJ5LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtdGVydGlhcnknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaG92ZXItdWk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taG92ZXItdWksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXVpJylcbiAgICApICFnbG9iYWw7XG4gICAgJGhvdmVyLWxpZ2h0LXVpOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWhvdmVyLWxpZ2h0LXVpLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1saWdodC11aScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRob3Zlci1zZWxlY3RlZC11aTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1ob3Zlci1zZWxlY3RlZC11aSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItc2VsZWN0ZWQtdWknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYWN0aXZlLXVpOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWFjdGl2ZS11aSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLXVpJylcbiAgICApICFnbG9iYWw7XG4gICAgJGFjdGl2ZS1saWdodC11aTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1hY3RpdmUtbGlnaHQtdWksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS1saWdodC11aScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzZWxlY3RlZC11aTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zZWxlY3RlZC11aSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc2VsZWN0ZWQtdWknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc2VsZWN0ZWQtbGlnaHQtdWk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc2VsZWN0ZWQtbGlnaHQtdWksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NlbGVjdGVkLWxpZ2h0LXVpJylcbiAgICApICFnbG9iYWw7XG4gICAgJGludmVyc2UtaG92ZXItdWk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW52ZXJzZS1ob3Zlci11aSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1ob3Zlci11aScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRob3Zlci1kYW5nZXI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taG92ZXItZGFuZ2VyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1kYW5nZXInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYWN0aXZlLWRhbmdlcjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1hY3RpdmUtZGFuZ2VyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtZGFuZ2VyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGhvdmVyLXJvdzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1ob3Zlci1yb3csXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXJvdycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR2aXNpdGVkLWxpbms6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdmlzaXRlZC1saW5rLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd2aXNpdGVkLWxpbmsnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZGlzYWJsZWQtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZGlzYWJsZWQtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc2FibGVkLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGRpc2FibGVkLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWRpc2FibGVkLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdkaXNhYmxlZC0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRkaXNhYmxlZC0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1kaXNhYmxlZC0wMyxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZGlzYWJsZWQtMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaGlnaGxpZ2h0OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWhpZ2hsaWdodCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaGlnaGxpZ2h0JylcbiAgICApICFnbG9iYWw7XG4gICAgJGRlY29yYXRpdmUtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZGVjb3JhdGl2ZS0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZGVjb3JhdGl2ZS0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRidXR0b24tc2VwYXJhdG9yOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWJ1dHRvbi1zZXBhcmF0b3IsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2J1dHRvbi1zZXBhcmF0b3InKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc2tlbGV0b24tMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc2tlbGV0b24tMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NrZWxldG9uLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJHNrZWxldG9uLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNrZWxldG9uLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdza2VsZXRvbi0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRicmFuZC0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1icmFuZC0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYnJhbmQtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYnJhbmQtMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tYnJhbmQtMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2JyYW5kLTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGJyYW5kLTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWJyYW5kLTAzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdicmFuZC0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRhY3RpdmUtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tYWN0aXZlLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaG92ZXItZmllbGQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taG92ZXItZmllbGQsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLWZpZWxkJylcbiAgICApICFnbG9iYWw7XG4gICAgJGRhbmdlcjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1kYW5nZXIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2RhbmdlcicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0wMjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJHNwYWNpbmctMDM6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3BhY2luZy0wMyxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTA0OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMDQsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDQnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0wNTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTA1LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA1JylcbiAgICApICFnbG9iYWw7XG4gICAgJHNwYWNpbmctMDY6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3BhY2luZy0wNixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wNicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTA3OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMDcsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDcnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0wODogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTA4LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA4JylcbiAgICApICFnbG9iYWw7XG4gICAgJHNwYWNpbmctMDk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3BhY2luZy0wOSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wOScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTEwOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMTAsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMTAnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0xMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTExLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTExJylcbiAgICApICFnbG9iYWw7XG4gICAgJHNwYWNpbmctMTI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3BhY2luZy0xMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0xMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTEzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMTMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMTMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZmx1aWQtc3BhY2luZy0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1mbHVpZC1zcGFjaW5nLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGZsdWlkLXNwYWNpbmctMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZmx1aWQtc3BhY2luZy0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZmx1aWQtc3BhY2luZy0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRmbHVpZC1zcGFjaW5nLTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWZsdWlkLXNwYWNpbmctMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ZsdWlkLXNwYWNpbmctMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZmx1aWQtc3BhY2luZy0wNDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1mbHVpZC1zcGFjaW5nLTA0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTA0JylcbiAgICApICFnbG9iYWw7XG4gICAgJGxheW91dC0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1sYXlvdXQtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRsYXlvdXQtMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tbGF5b3V0LTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkbGF5b3V0LTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWxheW91dC0wMyxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTAzJylcbiAgICApICFnbG9iYWw7XG4gICAgJGxheW91dC0wNDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1sYXlvdXQtMDQsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wNCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRsYXlvdXQtMDU6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tbGF5b3V0LTA1LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDUnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkbGF5b3V0LTA2OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWxheW91dC0wNixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTA2JylcbiAgICApICFnbG9iYWw7XG4gICAgJGxheW91dC0wNzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1sYXlvdXQtMDcsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wNycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRjb250YWluZXItMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tY29udGFpbmVyLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkY29udGFpbmVyLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWNvbnRhaW5lci0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGNvbnRhaW5lci0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1jb250YWluZXItMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRjb250YWluZXItMDQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tY29udGFpbmVyLTA0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDQnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkY29udGFpbmVyLTA1OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWNvbnRhaW5lci0wNSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTA1JylcbiAgICApICFnbG9iYWw7XG4gICAgJGljb24tc2l6ZS0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pY29uLXNpemUtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tc2l6ZS0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpY29uLXNpemUtMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taWNvbi1zaXplLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpY29uLXNpemUtMDInKVxuICAgICkgIWdsb2JhbDtcbiAgfVxuICBAaWYgJGVtaXQtY3VzdG9tLXByb3BlcnRpZXMgPT0gdHJ1ZSB7XG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW50ZXJhY3RpdmUtMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnRlcmFjdGl2ZS0wMScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDEnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpbnRlcmFjdGl2ZS0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2ludGVyYWN0aXZlLTAyJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wMicpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludGVyYWN0aXZlLTAzJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaW50ZXJhY3RpdmUtMDMnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludGVyYWN0aXZlLTAzJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW50ZXJhY3RpdmUtMDQnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnRlcmFjdGl2ZS0wNCcsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDQnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICd1aS1iYWNrZ3JvdW5kJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAndWktYmFja2dyb3VuZCcsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAndWktYmFja2dyb3VuZCcpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAndWktMDEnLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3VpLTAxJywgbWFwLWdldCgkdGhlbWUsICd1aS0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ3VpLTAyJywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd1aS0wMicsIG1hcC1nZXQoJHRoZW1lLCAndWktMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICd1aS0wMycsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgndWktMDMnLCBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTAzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAndWktMDQnLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3VpLTA0JywgbWFwLWdldCgkdGhlbWUsICd1aS0wNCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ3VpLTA1JywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd1aS0wNScsIG1hcC1nZXQoJHRoZW1lLCAndWktMDUnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICd0ZXh0LTAxJywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd0ZXh0LTAxJywgbWFwLWdldCgkdGhlbWUsICd0ZXh0LTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAndGV4dC0wMicsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgndGV4dC0wMicsIG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wMicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ3RleHQtMDMnLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3RleHQtMDMnLCBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtMDMnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICd0ZXh0LTA0JywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd0ZXh0LTA0JywgbWFwLWdldCgkdGhlbWUsICd0ZXh0LTA0JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAndGV4dC0wNScsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgndGV4dC0wNScsIG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wNScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICd0ZXh0LWVycm9yJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd0ZXh0LWVycm9yJywgbWFwLWdldCgkdGhlbWUsICd0ZXh0LWVycm9yJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnaWNvbi0wMScsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaWNvbi0wMScsIG1hcC1nZXQoJHRoZW1lLCAnaWNvbi0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2ljb24tMDInLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2ljb24tMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdpY29uLTAzJywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdpY29uLTAzJywgbWFwLWdldCgkdGhlbWUsICdpY29uLTAzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnbGluay0wMScsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGluay0wMScsIG1hcC1nZXQoJHRoZW1lLCAnbGluay0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2xpbmstMDInLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2xpbmstMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2xpbmstMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW52ZXJzZS1saW5rJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdpbnZlcnNlLWxpbmsnLCBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtbGluaycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2ZpZWxkLTAxJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2ZpZWxkLTAxJywgbWFwLWdldCgkdGhlbWUsICdmaWVsZC0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2ZpZWxkLTAyJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2ZpZWxkLTAyJywgbWFwLWdldCgkdGhlbWUsICdmaWVsZC0wMicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpbnZlcnNlLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdpbnZlcnNlLTAxJywgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludmVyc2UtMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2ludmVyc2UtMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3VwcG9ydC0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3VwcG9ydC0wMScsIG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzdXBwb3J0LTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzdXBwb3J0LTAyJywgbWFwLWdldCgkdGhlbWUsICdzdXBwb3J0LTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3N1cHBvcnQtMDMnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3N1cHBvcnQtMDMnLCBtYXAtZ2V0KCR0aGVtZSwgJ3N1cHBvcnQtMDMnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3VwcG9ydC0wNCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3VwcG9ydC0wNCcsIG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wNCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpbnZlcnNlLXN1cHBvcnQtMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnZlcnNlLXN1cHBvcnQtMDEnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2Utc3VwcG9ydC0wMScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludmVyc2Utc3VwcG9ydC0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2ludmVyc2Utc3VwcG9ydC0wMicsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1zdXBwb3J0LTAyJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW52ZXJzZS1zdXBwb3J0LTAzJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaW52ZXJzZS1zdXBwb3J0LTAzJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDMnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpbnZlcnNlLXN1cHBvcnQtMDQnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnZlcnNlLXN1cHBvcnQtMDQnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2Utc3VwcG9ydC0wNCcpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ292ZXJsYXktMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ292ZXJsYXktMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ292ZXJsYXktMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdkYW5nZXItMDEnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZGFuZ2VyLTAxJywgbWFwLWdldCgkdGhlbWUsICdkYW5nZXItMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdkYW5nZXItMDInLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZGFuZ2VyLTAyJywgbWFwLWdldCgkdGhlbWUsICdkYW5nZXItMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdmb2N1cycsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZm9jdXMnLCBtYXAtZ2V0KCR0aGVtZSwgJ2ZvY3VzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludmVyc2UtZm9jdXMtdWknLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnZlcnNlLWZvY3VzLXVpJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLWZvY3VzLXVpJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaG92ZXItcHJpbWFyeScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2hvdmVyLXByaW1hcnknLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXByaW1hcnknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdhY3RpdmUtcHJpbWFyeScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2FjdGl2ZS1wcmltYXJ5JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtcHJpbWFyeScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hvdmVyLXByaW1hcnktdGV4dCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2hvdmVyLXByaW1hcnktdGV4dCcsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItcHJpbWFyeS10ZXh0JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaG92ZXItc2Vjb25kYXJ5JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaG92ZXItc2Vjb25kYXJ5JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1zZWNvbmRhcnknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdhY3RpdmUtc2Vjb25kYXJ5JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnYWN0aXZlLXNlY29uZGFyeScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLXNlY29uZGFyeScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hvdmVyLXRlcnRpYXJ5JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaG92ZXItdGVydGlhcnknLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXRlcnRpYXJ5JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnYWN0aXZlLXRlcnRpYXJ5JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnYWN0aXZlLXRlcnRpYXJ5JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtdGVydGlhcnknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2hvdmVyLXVpJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2hvdmVyLXVpJywgbWFwLWdldCgkdGhlbWUsICdob3Zlci11aScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdob3Zlci1saWdodC11aScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2hvdmVyLWxpZ2h0LXVpJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1saWdodC11aScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hvdmVyLXNlbGVjdGVkLXVpJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaG92ZXItc2VsZWN0ZWQtdWknLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXNlbGVjdGVkLXVpJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdhY3RpdmUtdWknLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnYWN0aXZlLXVpJywgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtdWknKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnYWN0aXZlLWxpZ2h0LXVpJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnYWN0aXZlLWxpZ2h0LXVpJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtbGlnaHQtdWknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzZWxlY3RlZC11aScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc2VsZWN0ZWQtdWknLCBtYXAtZ2V0KCR0aGVtZSwgJ3NlbGVjdGVkLXVpJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NlbGVjdGVkLWxpZ2h0LXVpJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnc2VsZWN0ZWQtbGlnaHQtdWknLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NlbGVjdGVkLWxpZ2h0LXVpJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW52ZXJzZS1ob3Zlci11aScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2ludmVyc2UtaG92ZXItdWknLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtaG92ZXItdWknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdob3Zlci1kYW5nZXInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2hvdmVyLWRhbmdlcicsIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItZGFuZ2VyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2FjdGl2ZS1kYW5nZXInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdhY3RpdmUtZGFuZ2VyJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtZGFuZ2VyJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdob3Zlci1yb3cnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaG92ZXItcm93JywgbWFwLWdldCgkdGhlbWUsICdob3Zlci1yb3cnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAndmlzaXRlZC1saW5rJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd2aXNpdGVkLWxpbmsnLCBtYXAtZ2V0KCR0aGVtZSwgJ3Zpc2l0ZWQtbGluaycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdkaXNhYmxlZC0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZGlzYWJsZWQtMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc2FibGVkLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2Rpc2FibGVkLTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdkaXNhYmxlZC0wMicsIG1hcC1nZXQoJHRoZW1lLCAnZGlzYWJsZWQtMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZGlzYWJsZWQtMDMnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2Rpc2FibGVkLTAzJywgbWFwLWdldCgkdGhlbWUsICdkaXNhYmxlZC0wMycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2hpZ2hsaWdodCcsICRlbWl0LWRpZmZlcmVuY2UpXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdoaWdobGlnaHQnLCBtYXAtZ2V0KCR0aGVtZSwgJ2hpZ2hsaWdodCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdkZWNvcmF0aXZlLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZGVjb3JhdGl2ZS0wMScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZGVjb3JhdGl2ZS0wMScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2J1dHRvbi1zZXBhcmF0b3InLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdidXR0b24tc2VwYXJhdG9yJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdidXR0b24tc2VwYXJhdG9yJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc2tlbGV0b24tMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NrZWxldG9uLTAxJywgbWFwLWdldCgkdGhlbWUsICdza2VsZXRvbi0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdza2VsZXRvbi0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc2tlbGV0b24tMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ3NrZWxldG9uLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnYnJhbmQtMDEnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnYnJhbmQtMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2JyYW5kLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnYnJhbmQtMDInLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnYnJhbmQtMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2JyYW5kLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnYnJhbmQtMDMnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnYnJhbmQtMDMnLCBtYXAtZ2V0KCR0aGVtZSwgJ2JyYW5kLTAzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnYWN0aXZlLTAxJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2FjdGl2ZS0wMScsIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hvdmVyLWZpZWxkJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdob3Zlci1maWVsZCcsIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItZmllbGQnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdkYW5nZXInLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2RhbmdlcicsIG1hcC1nZXQoJHRoZW1lLCAnZGFuZ2VyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2NhcHRpb24tMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2NhcHRpb24tMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2NhcHRpb24tMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYWJlbC0wMScsICRlbWl0LWRpZmZlcmVuY2UpXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdsYWJlbC0wMScsIG1hcC1nZXQoJHRoZW1lLCAnbGFiZWwtMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaGVscGVyLXRleHQtMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdoZWxwZXItdGV4dC0wMScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaGVscGVyLXRleHQtMDEnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdib2R5LXNob3J0LTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnYm9keS1zaG9ydC0wMScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYm9keS1zaG9ydC0wMScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2JvZHktbG9uZy0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnYm9keS1sb25nLTAxJywgbWFwLWdldCgkdGhlbWUsICdib2R5LWxvbmctMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnYm9keS1zaG9ydC0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2JvZHktc2hvcnQtMDInLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2JvZHktc2hvcnQtMDInKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdib2R5LWxvbmctMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2JvZHktbG9uZy0wMicsIG1hcC1nZXQoJHRoZW1lLCAnYm9keS1sb25nLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnY29kZS0wMScsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnY29kZS0wMScsIG1hcC1nZXQoJHRoZW1lLCAnY29kZS0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2NvZGUtMDInLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2NvZGUtMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2NvZGUtMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaGVhZGluZy0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaGVhZGluZy0wMScsIG1hcC1nZXQoJHRoZW1lLCAnaGVhZGluZy0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDEnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wMScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hlYWRpbmctMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2hlYWRpbmctMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2hlYWRpbmctMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTAyJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDInKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDMnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDMnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wMycpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNCcsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTA0JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTA1JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTA1JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDUnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDYnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDYnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNicpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNycsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTA3JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZXhwcmVzc2l2ZS1oZWFkaW5nLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZXhwcmVzc2l2ZS1oZWFkaW5nLTAxJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLWhlYWRpbmctMDEnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdleHByZXNzaXZlLWhlYWRpbmctMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdleHByZXNzaXZlLWhlYWRpbmctMDInLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtaGVhZGluZy0wMicpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2V4cHJlc3NpdmUtaGVhZGluZy0wMycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2V4cHJlc3NpdmUtaGVhZGluZy0wMycsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1oZWFkaW5nLTAzJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZXhwcmVzc2l2ZS1oZWFkaW5nLTA0JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZXhwcmVzc2l2ZS1oZWFkaW5nLTA0JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLWhlYWRpbmctMDQnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdleHByZXNzaXZlLWhlYWRpbmctMDUnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdleHByZXNzaXZlLWhlYWRpbmctMDUnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtaGVhZGluZy0wNScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2V4cHJlc3NpdmUtaGVhZGluZy0wNicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2V4cHJlc3NpdmUtaGVhZGluZy0wNicsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1oZWFkaW5nLTA2JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZXhwcmVzc2l2ZS1wYXJhZ3JhcGgtMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdleHByZXNzaXZlLXBhcmFncmFwaC0wMScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1wYXJhZ3JhcGgtMDEnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdxdW90YXRpb24tMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3F1b3RhdGlvbi0wMScsIG1hcC1nZXQoJHRoZW1lLCAncXVvdGF0aW9uLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3F1b3RhdGlvbi0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgncXVvdGF0aW9uLTAyJywgbWFwLWdldCgkdGhlbWUsICdxdW90YXRpb24tMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZGlzcGxheS0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZGlzcGxheS0wMScsIG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheS0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdkaXNwbGF5LTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdkaXNwbGF5LTAyJywgbWFwLWdldCgkdGhlbWUsICdkaXNwbGF5LTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2Rpc3BsYXktMDMnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2Rpc3BsYXktMDMnLCBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc3BsYXktMDMnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZGlzcGxheS0wNCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZGlzcGxheS0wNCcsIG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheS0wNCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTAxJywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NwYWNpbmctMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NwYWNpbmctMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0wMycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0wMycsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wMycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTA0JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTA0JywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA0JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NwYWNpbmctMDUnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NwYWNpbmctMDUnLCBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDUnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0wNicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0wNicsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wNicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTA3JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTA3JywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA3JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NwYWNpbmctMDgnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NwYWNpbmctMDgnLCBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDgnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0wOScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0wOScsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wOScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTEwJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTEwJywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTEwJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NwYWNpbmctMTEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NwYWNpbmctMTEnLCBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMTEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0xMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0xMicsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0xMicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTEzJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTEzJywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTEzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ZsdWlkLXNwYWNpbmctMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdmbHVpZC1zcGFjaW5nLTAxJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTAxJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZmx1aWQtc3BhY2luZy0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2ZsdWlkLXNwYWNpbmctMDInLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ZsdWlkLXNwYWNpbmctMDInKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdmbHVpZC1zcGFjaW5nLTAzJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZmx1aWQtc3BhY2luZy0wMycsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZmx1aWQtc3BhY2luZy0wMycpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ZsdWlkLXNwYWNpbmctMDQnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdmbHVpZC1zcGFjaW5nLTA0JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTA0JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDEnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTAxJywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDInLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTAyJywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDMnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTAzJywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDMnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDQnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTA0JywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDQnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDUnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTA1JywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDUnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDYnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTA2JywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDYnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsYXlvdXQtMDcnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGF5b3V0LTA3JywgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDcnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnY29udGFpbmVyLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdjb250YWluZXItMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdjb250YWluZXItMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2NvbnRhaW5lci0wMicsIG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2NvbnRhaW5lci0wMycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnY29udGFpbmVyLTAzJywgbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDMnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnY29udGFpbmVyLTA0JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdjb250YWluZXItMDQnLCBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wNCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdjb250YWluZXItMDUnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2NvbnRhaW5lci0wNScsIG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTA1JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ljb24tc2l6ZS0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaWNvbi1zaXplLTAxJywgbWFwLWdldCgkdGhlbWUsICdpY29uLXNpemUtMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaWNvbi1zaXplLTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdpY29uLXNpemUtMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tc2l6ZS0wMicpKTtcbiAgICB9XG4gIH1cblxuICBAY29udGVudDtcblxuICAvLyBSZXNldCB0byBkZWZhdWx0IHRoZW1lIGFmdGVyIGFwcGx5IGluIGNvbnRlbnRcbiAgQGlmICRjYXJib24tLXRoZW1lICE9ICRwYXJlbnQtY2FyYm9uLXRoZW1lIHtcbiAgICAkY2FyYm9uLS10aGVtZTogJHBhcmVudC1jYXJib24tdGhlbWUgIWdsb2JhbDtcblxuICAgIEBpbmNsdWRlIGNhcmJvbi0tdGhlbWUoKTtcbiAgfVxufVxuIl19 */"] });
    return RetrosynthesisWizardComponent;
})();



/***/ }),

/***/ "aAdo":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/retrosynthesis/retrosynthesis-wizard/retrosynthesis-wizard-textarea/retrosynthesis-wizard-textarea.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: RetrosynthesisWizardTextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrosynthesisWizardTextareaComponent", function() { return RetrosynthesisWizardTextareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_common_utilities_clipboard_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/common-utilities/clipboard.directive */ "ieAw");
/* harmony import */ var _shared_carbon_design_bx_tooltip_bx_tooltip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/carbon-design/bx-tooltip/bx-tooltip.component */ "r8uK");








const _c0 = ["textarea"];
function RetrosynthesisWizardTextareaComponent_ng_container_1_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
    }
}
function RetrosynthesisWizardTextareaComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RetrosynthesisWizardTextareaComponent_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RetrosynthesisWizardTextareaComponent_ng_container_1_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.checkboxChanged.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r0.checkboxCheckedOnInit ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.checkboxLabel);
    }
}
function RetrosynthesisWizardTextareaComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.label);
    }
}
function RetrosynthesisWizardTextareaComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ibm-bx-tooltip", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RetrosynthesisWizardTextareaComponent_ng_template_2_ng_template_1_Template, 2, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.tooltip);
    }
}
let RetrosynthesisWizardTextareaComponent = /*@__PURE__*/ (() => {
    class RetrosynthesisWizardTextareaComponent {
        constructor(fb) {
            this.fb = fb;
            this.label = '';
            this.tooltip = '';
            this.checkboxLabel = null;
            this.checkboxCheckedOnInit = false;
            this.openKetcher = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.checkboxChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.smielsTextarea = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
            this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
            this.textAreaOverflow = false;
        }
        get smiles() {
            return this.smielsTextarea.value;
        }
        ngOnInit() {
            this.subscription.add(this.smielsTextarea.valueChanges.subscribe(value => {
                if (this.onChange) {
                    this.onChange(value);
                }
                this.textAreaOverflow =
                    this.textarea.nativeElement.clientHeight < this.textarea.nativeElement.scrollHeight;
            }));
        }
        writeValue(value) {
            this.smielsTextarea.setValue(value);
        }
        registerOnChange(fn) {
            this.onChange = fn;
        }
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
        onOpenKetcher() {
            this.openKetcher.emit({});
        }
        ngOnDestroy() {
            this.subscription.unsubscribe();
        }
    }
    RetrosynthesisWizardTextareaComponent.ɵfac = function RetrosynthesisWizardTextareaComponent_Factory(t) { return new (t || RetrosynthesisWizardTextareaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    RetrosynthesisWizardTextareaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RetrosynthesisWizardTextareaComponent, selectors: [["ibm-retrosynthesis-wizard-textarea"]], viewQuery: function RetrosynthesisWizardTextareaComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textarea = _t.first);
            }
        }, inputs: { label: "label", tooltip: "tooltip", checkboxLabel: "checkboxLabel", checkboxCheckedOnInit: "checkboxCheckedOnInit" }, outputs: { openKetcher: "openKetcher", checkboxChanged: "checkboxChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => RetrosynthesisWizardTextareaComponent),
                    multi: true,
                },
            ])], decls: 17, vars: 6, consts: [[1, "bx--row", "justify-content-between", "align-items-center"], [4, "ngIf", "ngIfElse"], ["header", ""], [1, "px-1"], ["type", "button", 1, "bx--btn", "bx--btn--ghost", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 16 16", 1, "bx--btn__icon"], ["d", "M2 11l8-8 3 3-8 8zM11 2l2-2 3 3-2 2zM0 16l3-1-2-2z"], [1, "bx--row", "ibm-retro-wizard-textarea-editor"], [1, "bx--col-md-8", "position-relative"], ["placeholder", "write string", 1, "w-100", "bx--text-area", "bx--text-area--v2", 3, "formControl"], ["textarea", ""], ["type", "button", 1, "bx--btn", "bx--btn--ghost", 3, "ibmClipboard"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", 1, "bx--btn__icon", "ml-0"], ["d", "M1 10H0V2C0 .9.9 0 2 0h8v1H2c-.6 0-1 .5-1 1v8z"], ["d", "M11 4.2V8h3.8L11 4.2zM15 9h-4c-.6 0-1-.4-1-1V4H4.5c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h10c.3 0 .5-.2.5-.5V9zm-4-6c.1 0 .3.1.4.1l4.5 4.5c0 .1.1.3.1.4v6.5c0 .8-.7 1.5-1.5 1.5h-10c-.8 0-1.5-.7-1.5-1.5v-10C3 3.7 3.7 3 4.5 3H11z"], [1, "bx--row"], [4, "ngTemplateOutlet"], [1, "px-1", "ibm-retro-wizard-textarea-checkbox"], ["id", "bx--checkbox-textarea", "type", "checkbox", "value", "new", "name", "checkboxTextarea", "aria-checked", "mixed", 1, "bx--checkbox", 3, "change"], ["for", "bx--checkbox-textarea", 1, "bx--checkbox-label"], [1, "d-flex"], ["tooltipTrigger", ""]], template: function RetrosynthesisWizardTextareaComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RetrosynthesisWizardTextareaComponent_ng_container_1_Template, 8, 3, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RetrosynthesisWizardTextareaComponent_ng_template_2_Template, 5, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RetrosynthesisWizardTextareaComponent_Template_button_click_5_listener() { return ctx.onOpenKetcher(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Use ketcher ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 9, 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkboxLabel)("ngIfElse", _r1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.smielsTextarea);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("texarea-overflow", ctx.textAreaOverflow);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ibmClipboard", ctx.smiles);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _shared_common_utilities_clipboard_directive__WEBPACK_IMPORTED_MODULE_4__["ClipboardDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _shared_carbon_design_bx_tooltip_bx_tooltip_component__WEBPACK_IMPORTED_MODULE_5__["BxTooltipComponent"]], styles: [".ibm-retro-wizard-textarea-editor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n}\n.ibm-retro-wizard-textarea-editor[_ngcontent-%COMP%]   button.texarea-overflow[_ngcontent-%COMP%] {\n  right: 30px;\n}\n.ibm-retro-wizard-textarea-editor[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n.ibm-retro-wizard-textarea-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3JldHJvc3ludGhlc2lzLXdpemFyZC10ZXh0YXJlYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7QUFITjtBQUlNO0VBQ0UsV0FBQTtBQUZSO0FBS0k7RUFDRSxpQkFBQTtBQUhOO0FBT0k7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBTE4iLCJmaWxlIjoicmV0cm9zeW50aGVzaXMtd2l6YXJkLXRleHRhcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy9zdHlsZXMvc2V0dGluZ3Mvc2V0dGluZ3Muc2Nzcyc7XG5cbi5pYm0tcmV0cm8td2l6YXJkLXRleHRhcmVhIHtcbiAgJi1lZGl0b3Ige1xuICAgIGJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTZweDtcbiAgICAgIHRvcDogMDtcbiAgICAgICYudGV4YXJlYS1vdmVyZmxvdyB7XG4gICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICB0ZXh0YXJlYSB7XG4gICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gIH1cbiAgJi1jaGVja2JveCB7XG4gICAgbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return RetrosynthesisWizardTextareaComponent;
})();



/***/ }),

/***/ "azD1":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/retrosynthesis/retrosynthesis-list/retrosynthesis-list.enum.ts ***!
  \****************************************************************************************/
/*! exports provided: ERetrosynthesisListType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERetrosynthesisListType", function() { return ERetrosynthesisListType; });
var ERetrosynthesisListType = /*@__PURE__*/ (function (ERetrosynthesisListType) {
    ERetrosynthesisListType["ATTEMPTS"] = "retrosynthesis-attempt";
    ERetrosynthesisListType["COLLECTION"] = "retrosynthesis-collection";
    return ERetrosynthesisListType;
})({});



/***/ }),

/***/ "kaiV":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/projects/waiting-for-pr/waiting-for-pr.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WaitingForPrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingForPrComponent", function() { return WaitingForPrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

let WaitingForPrComponent = /*@__PURE__*/ (() => {
    class WaitingForPrComponent {
        constructor() { }
        ngOnInit() { }
    }
    WaitingForPrComponent.ɵfac = function WaitingForPrComponent_Factory(t) { return new (t || WaitingForPrComponent)(); };
    WaitingForPrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WaitingForPrComponent, selectors: [["ibm-waiting-for-pr"]], decls: 2, vars: 0, template: function WaitingForPrComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " waiting-for-pr works!\n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWl0aW5nLWZvci1wci5jb21wb25lbnQuc2NzcyJ9 */"] });
    return WaitingForPrComponent;
})();



/***/ }),

/***/ "l1Fo":
/*!*****************************************************!*\
  !*** ./src/app/modules/projects/projects.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ "PCNd");
/* harmony import */ var _retrosynthesis_retrosynthesis_export_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../retrosynthesis/retrosynthesis-export.module */ "CBGr");
/* harmony import */ var _modules_projects_projects_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/projects/projects-routing.module */ "NihL");
/* harmony import */ var _modules_projects_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/projects/projects-list/projects-list.component */ "2sBM");
/* harmony import */ var _modules_projects_attempts_attempts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/projects/attempts/attempts.component */ "Gd3s");
/* harmony import */ var _modules_projects_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/projects/workspace/workspace.component */ "4NX8");
/* harmony import */ var _modules_projects_reactions_collection_reactions_collection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/projects/reactions-collection/reactions-collection.component */ "E+4U");
/* harmony import */ var _modules_projects_workspace_header_workspace_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/projects/workspace-header/workspace-header.component */ "KxUX");
/* harmony import */ var _modules_molecules_molecules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/molecules/molecules-shared.module */ "SoOp");
/* harmony import */ var _waiting_for_pr_waiting_for_pr_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./waiting-for-pr/waiting-for-pr.component */ "kaiV");
/* harmony import */ var _modules_projects_projects_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/projects/projects-shared.module */ "Nfod");
/* harmony import */ var _modules_projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/projects/projects/projects.component */ "943x");
/* harmony import */ var _modules_projects_prediction_outcomes_prediction_outcomes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/projects/prediction-outcomes/prediction-outcomes.component */ "7aeT");
/* harmony import */ var _workspace_smile_editor_smile_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workspace/smile-editor/smile-editor.component */ "9wVm");
/* harmony import */ var _reaction_rename_modal_reaction_rename_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reaction-rename-modal/reaction-rename-modal.component */ "C2ur");
/* harmony import */ var _reaction_wizard_reaction_wizard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reaction-wizard/reaction-wizard.component */ "oUay");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");






// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length





// tslint:disable-next-line:max-line-length


// tslint:disable-next-line:max-line-length



let ProjectsModule = /*@__PURE__*/ (() => {
    class ProjectsModule {
    }
    ProjectsModule.ɵfac = function ProjectsModule_Factory(t) { return new (t || ProjectsModule)(); };
    ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: ProjectsModule });
    ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                _modules_projects_projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"],
                _modules_molecules_molecules_shared_module__WEBPACK_IMPORTED_MODULE_8__["MoleculesSharedModule"],
                _modules_projects_projects_shared_module__WEBPACK_IMPORTED_MODULE_10__["ProjectsSharedModule"],
                _retrosynthesis_retrosynthesis_export_module__WEBPACK_IMPORTED_MODULE_1__["RetrosynthesisExportModule"],
            ]] });
    return ProjectsModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ProjectsModule, { declarations: [_modules_projects_workspace_header_workspace_header_component__WEBPACK_IMPORTED_MODULE_7__["WorkspaceHeaderComponent"],
            _modules_projects_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsListComponent"],
            _modules_projects_attempts_attempts_component__WEBPACK_IMPORTED_MODULE_4__["AttemptsComponent"],
            _modules_projects_reactions_collection_reactions_collection_component__WEBPACK_IMPORTED_MODULE_6__["ReactionsCollectionComponent"],
            _modules_projects_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_5__["WorkspaceComponent"],
            _waiting_for_pr_waiting_for_pr_component__WEBPACK_IMPORTED_MODULE_9__["WaitingForPrComponent"],
            _modules_projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"],
            _modules_projects_prediction_outcomes_prediction_outcomes_component__WEBPACK_IMPORTED_MODULE_12__["PredictionOutcomesComponent"],
            _workspace_smile_editor_smile_editor_component__WEBPACK_IMPORTED_MODULE_13__["SmileEditorComponent"],
            _reaction_rename_modal_reaction_rename_modal_component__WEBPACK_IMPORTED_MODULE_14__["ReactionRenameModalComponent"],
            _reaction_wizard_reaction_wizard_component__WEBPACK_IMPORTED_MODULE_15__["ReactionWizardComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            _modules_projects_projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"],
            _modules_molecules_molecules_shared_module__WEBPACK_IMPORTED_MODULE_8__["MoleculesSharedModule"],
            _modules_projects_projects_shared_module__WEBPACK_IMPORTED_MODULE_10__["ProjectsSharedModule"],
            _retrosynthesis_retrosynthesis_export_module__WEBPACK_IMPORTED_MODULE_1__["RetrosynthesisExportModule"]] });
})();



/***/ }),

/***/ "oUay":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/projects/reaction-wizard/reaction-wizard.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ReactionWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactionWizardComponent", function() { return ReactionWizardComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_libs_bitforce_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/libs/bitforce/components */ "3lSO");
/* harmony import */ var _app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services */ "dJ3e");
/* harmony import */ var _shared_components_modal_close_button_modal_close_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal-close-button/modal-close-button.component */ "fj6H");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ReactionWizardComponent_option_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const aiModel_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", aiModel_r1.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](aiModel_r1.name);
    }
}
let ReactionWizardComponent = /*@__PURE__*/ (() => {
    class ReactionWizardComponent {
        constructor(loaderService, aiModelsService) {
            this.loaderService = loaderService;
            this.aiModelsService = aiModelsService;
        }
        ngOnInit() {
            this.loaderService.show();
            this.aiModelsService
                .getAiModelsForPredictions()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(response => {
                this.aiModels = response.content.models;
                this.aiModel = (this.aiModels.find(m => m.isDefault) || { name: undefined }).name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => this.loaderService.hide()))
                .subscribe();
        }
        closeModal() { }
        onRunPrediction() {
            this.onCreatePrediction({ aiModel: this.aiModel });
            this.closeModal();
        }
    }
    ReactionWizardComponent.ɵfac = function ReactionWizardComponent_Factory(t) { return new (t || ReactionWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_libs_bitforce_components__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services__WEBPACK_IMPORTED_MODULE_3__["AiModelsService"])); };
    ReactionWizardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReactionWizardComponent, selectors: [["ibm-reaction-wizard"]], decls: 25, vars: 3, consts: [[1, "bx--grid", "ibm--retro-wizard"], [1, "ibm--retro-wizard-close-button"], [1, "ibm--retro-wizard-header"], [1, "bx--row", "ibm--retro-wizard-container"], [1, "bx--col-md-8"], [1, "bx--row"], [1, "mb-1"], [1, "my-05"], [1, "bx--select"], [1, "bx--select-input", 3, "ngModel", "ngModelChange"], ["class", "bx--select-option", 3, "value", 4, "ngFor", "ngForOf"], ["width", "10", "height", "5", "viewBox", "0 0 10 5", "fill-rule", "evenodd", 1, "bx--select__arrow"], ["d", "M10 0L5 5 0 0z"], [1, "ibm--retro-wizard-footer"], ["type", "button", 1, "bx--btn", "bx--btn--secondary", 3, "click"], ["type", "button", 1, "bx--btn", "bx--btn--primary", "ml-1", "mr-2", 3, "disabled", "click"], [1, "bx--select-option", 3, "value"]], template: function ReactionWizardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ibm-modal-close-button", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Run prediction");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Setting the parameters for the result you want to have");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " We continuously update our AI models. As a default, the predictions are powered by the best version of our models. Other model releases can be selected with the dropdown menu. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Choose AI model version");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ReactionWizardComponent_Template_select_ngModelChange_16_listener($event) { return ctx.aiModel = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ReactionWizardComponent_option_17_Template, 2, 2, "option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "svg", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReactionWizardComponent_Template_button_click_21_listener() { return ctx.closeModal(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Cancel ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReactionWizardComponent_Template_button_click_23_listener() { return ctx.onRunPrediction(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Run prediction ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aiModel);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.aiModels);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.aiModel);
            }
        }, directives: [_shared_components_modal_close_button_modal_close_button_component__WEBPACK_IMPORTED_MODULE_4__["ModalCloseButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: [".ibm--retro-wizard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.ibm--retro-wizard-container[_ngcontent-%COMP%] {\n  margin-top: 13rem;\n  margin-bottom: 7.5rem;\n}\n@media (max-width: 820px) {\n  .ibm--retro-wizard-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (min-width: 820px) {\n  .ibm--retro-wizard-container[_ngcontent-%COMP%] {\n    width: 800px;\n  }\n}\n.ibm--retro-wizard-header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 12.5rem;\n  padding-top: 4.25rem;\n  border-top: solid 4px #0f62fe;\n  text-align: center;\n  background-color: #fff;\n  z-index: 9000;\n}\n.ibm--retro-wizard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ibm--retro-wizard-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  color: #161616;\n}\n.ibm--retro-wizard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3.375rem;\n  line-height: 4.25rem;\n  font-weight: 300;\n}\n.ibm--retro-wizard-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.ibm--retro-wizard-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  background-color: #f4f4f4;\n}\n.ibm--retro-wizard-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5.5rem;\n  background-color: #f4f4f4;\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  align-items: center;\n  justify-content: flex-end;\n}\n.ibm--retro-wizard-close-button[_ngcontent-%COMP%]     button {\n  z-index: 9001;\n  position: fixed;\n  top: 30px;\n  right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlYWN0aW9uLXdpemFyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9zZXR0aW5ncy9fY29sb3JzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FyYm9uLWNvbXBvbmVudHMvc2Nzcy9nbG9iYWxzL3Njc3MvdmVuZG9yL0BjYXJib24vZWxlbWVudHMvc2Nzcy90aGVtZXMvZ2VuZXJhdGVkL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFFRTtFQU9FLGlCQUFBO0VBQ0EscUJBQUE7QUFOSjtBQURJO0VBREY7SUFFSSxXQUFBO0VBSUo7QUFDRjtBQUhJO0VBSkY7SUFLSSxZQUFBO0VBTUo7QUFDRjtBQUZFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkN6Qkk7RUQwQkosYUFBQTtBQUlKO0FBSEk7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0VtQk07QUZkWjtBQUhJO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBS047QUFISTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUtOO0FBREU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRUhjO0FGTWxCO0FBREU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRVJjO0VGU2QsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFHSjtBQUNNO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNSIiwiZmlsZSI6InJlYWN0aW9uLXdpemFyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvc3R5bGVzL3NldHRpbmdzL3NldHRpbmdzLnNjc3MnO1xuXG4uaWJtLS1yZXRyby13aXphcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmLWNvbnRhaW5lciB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gICAgICB3aWR0aDogODAwcHg7XG4gICAgfVxuICAgIG1hcmdpbi10b3A6IDEzcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDcuNXJlbTtcbiAgfVxuICAmLWhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTIuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogNC4yNXJlbTtcbiAgICBib3JkZXItdG9wOiBzb2xpZCA0cHggJGludGVyYWN0aXZlLTAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgei1pbmRleDogOTAwMDtcbiAgICBoMixcbiAgICBoMyB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAkdGV4dC0wMTtcbiAgICB9XG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAzLjM3NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0LjI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICB9XG4gIH1cblxuICAmLWRpdmlkZXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1aS1iYWNrZ3JvdW5kO1xuICB9XG4gICYtZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdWktYmFja2dyb3VuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgJi1jbG9zZS1idXR0b24ge1xuICAgIDo6bmctZGVlcCB7XG4gICAgICBidXR0b24ge1xuICAgICAgICB6LWluZGV4OiA5MDAxO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICMwMDA7XG4iLCIvLyBDb2RlIGdlbmVyYXRlZCBieSBAY2FyYm9uL3RoZW1lcy4gRE8gTk9UIEVESVQuXG4vL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDE5XG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQGltcG9ydCAnLi90aGVtZXMnO1xuXG4vLy8gRGVmaW5lIHRoZW1lIHZhcmlhYmxlcyBmcm9tIGEgbWFwIG9mIHRva2Vuc1xuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtNYXB9ICR0aGVtZSBbJGNhcmJvbi0tdGhlbWVdIC0gTWFwIG9mIHRoZW1lIHRva2Vuc1xuLy8vIEBwYXJhbSB7Qm9vbH0gJGVtaXQtY3VzdG9tLXByb3BlcnRpZXMgW2ZhbHNlXSAtIE91dHB1dCBDU1MgQ3VzdG9tIFByb3BlcnRpZXMgZm9yIHRoZW1lIHRva2Vuc1xuLy8vIEBjb250ZW50IFBhc3MgaW4geW91ciBjdXN0b20gZGVjbGFyYXRpb24gYmxvY2tzIHRvIGJlIHVzZWQgYWZ0ZXIgdGhlIHRva2VuIG1hcHMgc2V0IHRoZW1pbmcgdmFyaWFibGVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2Nzc1xuLy8vICAgLy8gRGVmYXVsdCB1c2FnZVxuLy8vICAgQGluY2x1ZGUgY2FyYm9uLS10aGVtZSgpO1xuLy8vXG4vLy8gICAvLyBBbHRlcm5hdGUgc3R5bGluZyAobm90IHdoaXRlIHRoZW1lKVxuLy8vICAgQGluY2x1ZGUgY2FyYm9uLS10aGVtZSgkY2FyYm9uLS10aGVtZS0tZzkwKSB7XG4vLy8gICAgIC8vIGRlY2xhcmF0aW9ucy4uLlxuLy8vICAgfVxuLy8vXG4vLy8gICAvLyBJbmxpbmUgc3R5bGluZ1xuLy8vICAgQGluY2x1ZGUgY2FyYm9uLS10aGVtZSgkY2FyYm9uLS10aGVtZS0tZzkwKSB7XG4vLy8gICAgIC5teS1kYXJrLXRoZW1lIHtcbi8vLyAgICAgICAvLyBkZWNsYXJhdGlvbnMuLi5cbi8vLyAgICAgfVxuLy8vICAgfVxuLy8vXG4vLy8gQGdyb3VwIEBjYXJib24vdGhlbWVzXG5AbWl4aW4gY2FyYm9uLS10aGVtZShcbiAgJHRoZW1lOiAkY2FyYm9uLS10aGVtZSxcbiAgJGVtaXQtY3VzdG9tLXByb3BlcnRpZXM6IGZhbHNlLFxuICAkZW1pdC1kaWZmZXJlbmNlOiBmYWxzZVxuKSB7XG4gICRwYXJlbnQtY2FyYm9uLXRoZW1lOiAkY2FyYm9uLS10aGVtZTtcbiAgJGNhcmJvbi0tdGhlbWU6ICR0aGVtZSAhZ2xvYmFsO1xuICAkaW50ZXJhY3RpdmUtMDE6IG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDEnKSAhZ2xvYmFsO1xuICAkaW50ZXJhY3RpdmUtMDI6IG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDInKSAhZ2xvYmFsO1xuICAkaW50ZXJhY3RpdmUtMDM6IG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDMnKSAhZ2xvYmFsO1xuICAkaW50ZXJhY3RpdmUtMDQ6IG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDQnKSAhZ2xvYmFsO1xuICAkdWktYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsICd1aS1iYWNrZ3JvdW5kJykgIWdsb2JhbDtcbiAgJHVpLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTAxJykgIWdsb2JhbDtcbiAgJHVpLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTAyJykgIWdsb2JhbDtcbiAgJHVpLTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTAzJykgIWdsb2JhbDtcbiAgJHVpLTA0OiBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTA0JykgIWdsb2JhbDtcbiAgJHVpLTA1OiBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTA1JykgIWdsb2JhbDtcbiAgJHRleHQtMDE6IG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wMScpICFnbG9iYWw7XG4gICR0ZXh0LTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtMDInKSAhZ2xvYmFsO1xuICAkdGV4dC0wMzogbWFwLWdldCgkdGhlbWUsICd0ZXh0LTAzJykgIWdsb2JhbDtcbiAgJHRleHQtMDQ6IG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wNCcpICFnbG9iYWw7XG4gICR0ZXh0LTA1OiBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtMDUnKSAhZ2xvYmFsO1xuICAkdGV4dC1lcnJvcjogbWFwLWdldCgkdGhlbWUsICd0ZXh0LWVycm9yJykgIWdsb2JhbDtcbiAgJGljb24tMDE6IG1hcC1nZXQoJHRoZW1lLCAnaWNvbi0wMScpICFnbG9iYWw7XG4gICRpY29uLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tMDInKSAhZ2xvYmFsO1xuICAkaWNvbi0wMzogbWFwLWdldCgkdGhlbWUsICdpY29uLTAzJykgIWdsb2JhbDtcbiAgJGxpbmstMDE6IG1hcC1nZXQoJHRoZW1lLCAnbGluay0wMScpICFnbG9iYWw7XG4gICRsaW5rLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2xpbmstMDInKSAhZ2xvYmFsO1xuICAkaW52ZXJzZS1saW5rOiBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtbGluaycpICFnbG9iYWw7XG4gICRmaWVsZC0wMTogbWFwLWdldCgkdGhlbWUsICdmaWVsZC0wMScpICFnbG9iYWw7XG4gICRmaWVsZC0wMjogbWFwLWdldCgkdGhlbWUsICdmaWVsZC0wMicpICFnbG9iYWw7XG4gICRpbnZlcnNlLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtMDEnKSAhZ2xvYmFsO1xuICAkaW52ZXJzZS0wMjogbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLTAyJykgIWdsb2JhbDtcbiAgJHN1cHBvcnQtMDE6IG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wMScpICFnbG9iYWw7XG4gICRzdXBwb3J0LTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ3N1cHBvcnQtMDInKSAhZ2xvYmFsO1xuICAkc3VwcG9ydC0wMzogbWFwLWdldCgkdGhlbWUsICdzdXBwb3J0LTAzJykgIWdsb2JhbDtcbiAgJHN1cHBvcnQtMDQ6IG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wNCcpICFnbG9iYWw7XG4gICRpbnZlcnNlLXN1cHBvcnQtMDE6IG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1zdXBwb3J0LTAxJykgIWdsb2JhbDtcbiAgJGludmVyc2Utc3VwcG9ydC0wMjogbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDInKSAhZ2xvYmFsO1xuICAkaW52ZXJzZS1zdXBwb3J0LTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2Utc3VwcG9ydC0wMycpICFnbG9iYWw7XG4gICRpbnZlcnNlLXN1cHBvcnQtMDQ6IG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1zdXBwb3J0LTA0JykgIWdsb2JhbDtcbiAgJG92ZXJsYXktMDE6IG1hcC1nZXQoJHRoZW1lLCAnb3ZlcmxheS0wMScpICFnbG9iYWw7XG4gICRkYW5nZXItMDE6IG1hcC1nZXQoJHRoZW1lLCAnZGFuZ2VyLTAxJykgIWdsb2JhbDtcbiAgJGRhbmdlci0wMjogbWFwLWdldCgkdGhlbWUsICdkYW5nZXItMDInKSAhZ2xvYmFsO1xuICAkZm9jdXM6IG1hcC1nZXQoJHRoZW1lLCAnZm9jdXMnKSAhZ2xvYmFsO1xuICAkaW52ZXJzZS1mb2N1cy11aTogbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLWZvY3VzLXVpJykgIWdsb2JhbDtcbiAgJGhvdmVyLXByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItcHJpbWFyeScpICFnbG9iYWw7XG4gICRhY3RpdmUtcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtcHJpbWFyeScpICFnbG9iYWw7XG4gICRob3Zlci1wcmltYXJ5LXRleHQ6IG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItcHJpbWFyeS10ZXh0JykgIWdsb2JhbDtcbiAgJGhvdmVyLXNlY29uZGFyeTogbWFwLWdldCgkdGhlbWUsICdob3Zlci1zZWNvbmRhcnknKSAhZ2xvYmFsO1xuICAkYWN0aXZlLXNlY29uZGFyeTogbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtc2Vjb25kYXJ5JykgIWdsb2JhbDtcbiAgJGhvdmVyLXRlcnRpYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXRlcnRpYXJ5JykgIWdsb2JhbDtcbiAgJGFjdGl2ZS10ZXJ0aWFyeTogbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtdGVydGlhcnknKSAhZ2xvYmFsO1xuICAkaG92ZXItdWk6IG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItdWknKSAhZ2xvYmFsO1xuICAkaG92ZXItbGlnaHQtdWk6IG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItbGlnaHQtdWknKSAhZ2xvYmFsO1xuICAkaG92ZXItc2VsZWN0ZWQtdWk6IG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItc2VsZWN0ZWQtdWknKSAhZ2xvYmFsO1xuICAkYWN0aXZlLXVpOiBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS11aScpICFnbG9iYWw7XG4gICRhY3RpdmUtbGlnaHQtdWk6IG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLWxpZ2h0LXVpJykgIWdsb2JhbDtcbiAgJHNlbGVjdGVkLXVpOiBtYXAtZ2V0KCR0aGVtZSwgJ3NlbGVjdGVkLXVpJykgIWdsb2JhbDtcbiAgJHNlbGVjdGVkLWxpZ2h0LXVpOiBtYXAtZ2V0KCR0aGVtZSwgJ3NlbGVjdGVkLWxpZ2h0LXVpJykgIWdsb2JhbDtcbiAgJGludmVyc2UtaG92ZXItdWk6IG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1ob3Zlci11aScpICFnbG9iYWw7XG4gICRob3Zlci1kYW5nZXI6IG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItZGFuZ2VyJykgIWdsb2JhbDtcbiAgJGFjdGl2ZS1kYW5nZXI6IG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLWRhbmdlcicpICFnbG9iYWw7XG4gICRob3Zlci1yb3c6IG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItcm93JykgIWdsb2JhbDtcbiAgJHZpc2l0ZWQtbGluazogbWFwLWdldCgkdGhlbWUsICd2aXNpdGVkLWxpbmsnKSAhZ2xvYmFsO1xuICAkZGlzYWJsZWQtMDE6IG1hcC1nZXQoJHRoZW1lLCAnZGlzYWJsZWQtMDEnKSAhZ2xvYmFsO1xuICAkZGlzYWJsZWQtMDI6IG1hcC1nZXQoJHRoZW1lLCAnZGlzYWJsZWQtMDInKSAhZ2xvYmFsO1xuICAkZGlzYWJsZWQtMDM6IG1hcC1nZXQoJHRoZW1lLCAnZGlzYWJsZWQtMDMnKSAhZ2xvYmFsO1xuICAkaGlnaGxpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2hpZ2hsaWdodCcpICFnbG9iYWw7XG4gICRkZWNvcmF0aXZlLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2RlY29yYXRpdmUtMDEnKSAhZ2xvYmFsO1xuICAkYnV0dG9uLXNlcGFyYXRvcjogbWFwLWdldCgkdGhlbWUsICdidXR0b24tc2VwYXJhdG9yJykgIWdsb2JhbDtcbiAgJHNrZWxldG9uLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ3NrZWxldG9uLTAxJykgIWdsb2JhbDtcbiAgJHNrZWxldG9uLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ3NrZWxldG9uLTAyJykgIWdsb2JhbDtcbiAgJGJyYW5kLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2JyYW5kLTAxJykgIWdsb2JhbDtcbiAgJGJyYW5kLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2JyYW5kLTAyJykgIWdsb2JhbDtcbiAgJGJyYW5kLTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ2JyYW5kLTAzJykgIWdsb2JhbDtcbiAgJGFjdGl2ZS0wMTogbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtMDEnKSAhZ2xvYmFsO1xuICAkaG92ZXItZmllbGQ6IG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItZmllbGQnKSAhZ2xvYmFsO1xuICAkZGFuZ2VyOiBtYXAtZ2V0KCR0aGVtZSwgJ2RhbmdlcicpICFnbG9iYWw7XG4gICRjYXB0aW9uLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2NhcHRpb24tMDEnKSAhZ2xvYmFsO1xuICAkbGFiZWwtMDE6IG1hcC1nZXQoJHRoZW1lLCAnbGFiZWwtMDEnKSAhZ2xvYmFsO1xuICAkaGVscGVyLXRleHQtMDE6IG1hcC1nZXQoJHRoZW1lLCAnaGVscGVyLXRleHQtMDEnKSAhZ2xvYmFsO1xuICAkYm9keS1zaG9ydC0wMTogbWFwLWdldCgkdGhlbWUsICdib2R5LXNob3J0LTAxJykgIWdsb2JhbDtcbiAgJGJvZHktbG9uZy0wMTogbWFwLWdldCgkdGhlbWUsICdib2R5LWxvbmctMDEnKSAhZ2xvYmFsO1xuICAkYm9keS1zaG9ydC0wMjogbWFwLWdldCgkdGhlbWUsICdib2R5LXNob3J0LTAyJykgIWdsb2JhbDtcbiAgJGJvZHktbG9uZy0wMjogbWFwLWdldCgkdGhlbWUsICdib2R5LWxvbmctMDInKSAhZ2xvYmFsO1xuICAkY29kZS0wMTogbWFwLWdldCgkdGhlbWUsICdjb2RlLTAxJykgIWdsb2JhbDtcbiAgJGNvZGUtMDI6IG1hcC1nZXQoJHRoZW1lLCAnY29kZS0wMicpICFnbG9iYWw7XG4gICRoZWFkaW5nLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2hlYWRpbmctMDEnKSAhZ2xvYmFsO1xuICAkcHJvZHVjdGl2ZS1oZWFkaW5nLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wMScpICFnbG9iYWw7XG4gICRoZWFkaW5nLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2hlYWRpbmctMDInKSAhZ2xvYmFsO1xuICAkcHJvZHVjdGl2ZS1oZWFkaW5nLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wMicpICFnbG9iYWw7XG4gICRwcm9kdWN0aXZlLWhlYWRpbmctMDM6IG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTAzJykgIWdsb2JhbDtcbiAgJHByb2R1Y3RpdmUtaGVhZGluZy0wNDogbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDQnKSAhZ2xvYmFsO1xuICAkcHJvZHVjdGl2ZS1oZWFkaW5nLTA1OiBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNScpICFnbG9iYWw7XG4gICRwcm9kdWN0aXZlLWhlYWRpbmctMDY6IG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTA2JykgIWdsb2JhbDtcbiAgJHByb2R1Y3RpdmUtaGVhZGluZy0wNzogbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDcnKSAhZ2xvYmFsO1xuICAkZXhwcmVzc2l2ZS1oZWFkaW5nLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtaGVhZGluZy0wMScpICFnbG9iYWw7XG4gICRleHByZXNzaXZlLWhlYWRpbmctMDI6IG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1oZWFkaW5nLTAyJykgIWdsb2JhbDtcbiAgJGV4cHJlc3NpdmUtaGVhZGluZy0wMzogbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLWhlYWRpbmctMDMnKSAhZ2xvYmFsO1xuICAkZXhwcmVzc2l2ZS1oZWFkaW5nLTA0OiBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtaGVhZGluZy0wNCcpICFnbG9iYWw7XG4gICRleHByZXNzaXZlLWhlYWRpbmctMDU6IG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1oZWFkaW5nLTA1JykgIWdsb2JhbDtcbiAgJGV4cHJlc3NpdmUtaGVhZGluZy0wNjogbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLWhlYWRpbmctMDYnKSAhZ2xvYmFsO1xuICAkZXhwcmVzc2l2ZS1wYXJhZ3JhcGgtMDE6IG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1wYXJhZ3JhcGgtMDEnKSAhZ2xvYmFsO1xuICAkcXVvdGF0aW9uLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ3F1b3RhdGlvbi0wMScpICFnbG9iYWw7XG4gICRxdW90YXRpb24tMDI6IG1hcC1nZXQoJHRoZW1lLCAncXVvdGF0aW9uLTAyJykgIWdsb2JhbDtcbiAgJGRpc3BsYXktMDE6IG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheS0wMScpICFnbG9iYWw7XG4gICRkaXNwbGF5LTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc3BsYXktMDInKSAhZ2xvYmFsO1xuICAkZGlzcGxheS0wMzogbWFwLWdldCgkdGhlbWUsICdkaXNwbGF5LTAzJykgIWdsb2JhbDtcbiAgJGRpc3BsYXktMDQ6IG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheS0wNCcpICFnbG9iYWw7XG4gICRzcGFjaW5nLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDEnKSAhZ2xvYmFsO1xuICAkc3BhY2luZy0wMjogbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTAyJykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMDM6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wMycpICFnbG9iYWw7XG4gICRzcGFjaW5nLTA0OiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDQnKSAhZ2xvYmFsO1xuICAkc3BhY2luZy0wNTogbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA1JykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMDY6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wNicpICFnbG9iYWw7XG4gICRzcGFjaW5nLTA3OiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDcnKSAhZ2xvYmFsO1xuICAkc3BhY2luZy0wODogbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA4JykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMDk6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wOScpICFnbG9iYWw7XG4gICRzcGFjaW5nLTEwOiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMTAnKSAhZ2xvYmFsO1xuICAkc3BhY2luZy0xMTogbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTExJykgIWdsb2JhbDtcbiAgJHNwYWNpbmctMTI6IG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0xMicpICFnbG9iYWw7XG4gICRzcGFjaW5nLTEzOiBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMTMnKSAhZ2xvYmFsO1xuICAkZmx1aWQtc3BhY2luZy0wMTogbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTAxJykgIWdsb2JhbDtcbiAgJGZsdWlkLXNwYWNpbmctMDI6IG1hcC1nZXQoJHRoZW1lLCAnZmx1aWQtc3BhY2luZy0wMicpICFnbG9iYWw7XG4gICRmbHVpZC1zcGFjaW5nLTAzOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZsdWlkLXNwYWNpbmctMDMnKSAhZ2xvYmFsO1xuICAkZmx1aWQtc3BhY2luZy0wNDogbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTA0JykgIWdsb2JhbDtcbiAgJGxheW91dC0wMTogbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDEnKSAhZ2xvYmFsO1xuICAkbGF5b3V0LTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wMicpICFnbG9iYWw7XG4gICRsYXlvdXQtMDM6IG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTAzJykgIWdsb2JhbDtcbiAgJGxheW91dC0wNDogbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDQnKSAhZ2xvYmFsO1xuICAkbGF5b3V0LTA1OiBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wNScpICFnbG9iYWw7XG4gICRsYXlvdXQtMDY6IG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTA2JykgIWdsb2JhbDtcbiAgJGxheW91dC0wNzogbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDcnKSAhZ2xvYmFsO1xuICAkY29udGFpbmVyLTAxOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wMScpICFnbG9iYWw7XG4gICRjb250YWluZXItMDI6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTAyJykgIWdsb2JhbDtcbiAgJGNvbnRhaW5lci0wMzogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDMnKSAhZ2xvYmFsO1xuICAkY29udGFpbmVyLTA0OiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wNCcpICFnbG9iYWw7XG4gICRjb250YWluZXItMDU6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTA1JykgIWdsb2JhbDtcbiAgJGljb24tc2l6ZS0wMTogbWFwLWdldCgkdGhlbWUsICdpY29uLXNpemUtMDEnKSAhZ2xvYmFsO1xuICAkaWNvbi1zaXplLTAyOiBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tc2l6ZS0wMicpICFnbG9iYWw7XG5cbiAgQGlmIGdsb2JhbC12YXJpYWJsZS1leGlzdHMoJ2ZlYXR1cmUtZmxhZ3MnKSBhbmRcbiAgICBtYXAtZ2V0KCRmZWF0dXJlLWZsYWdzLCAnZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcycpXG4gIHtcbiAgICAkaW50ZXJhY3RpdmUtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW50ZXJhY3RpdmUtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludGVyYWN0aXZlLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGludGVyYWN0aXZlLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWludGVyYWN0aXZlLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnRlcmFjdGl2ZS0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pbnRlcmFjdGl2ZS0wMyxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaW50ZXJhY3RpdmUtMDQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW50ZXJhY3RpdmUtMDQsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludGVyYWN0aXZlLTA0JylcbiAgICApICFnbG9iYWw7XG4gICAgJHVpLWJhY2tncm91bmQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdWktYmFja2dyb3VuZCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndWktYmFja2dyb3VuZCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR1aS0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS11aS0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndWktMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdWktMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdWktMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJHVpLTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXVpLTAzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd1aS0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR1aS0wNDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS11aS0wNCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndWktMDQnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdWktMDU6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdWktMDUsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTA1JylcbiAgICApICFnbG9iYWw7XG4gICAgJHRleHQtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdGV4dC0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR0ZXh0LTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXRleHQtMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdGV4dC0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS10ZXh0LTAzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd0ZXh0LTAzJylcbiAgICApICFnbG9iYWw7XG4gICAgJHRleHQtMDQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tdGV4dC0wNCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wNCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICR0ZXh0LTA1OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXRleHQtMDUsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtMDUnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdGV4dC1lcnJvcjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS10ZXh0LWVycm9yLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICd0ZXh0LWVycm9yJylcbiAgICApICFnbG9iYWw7XG4gICAgJGljb24tMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taWNvbi0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaWNvbi0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpY29uLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWljb24tMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaWNvbi0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pY29uLTAzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpY29uLTAzJylcbiAgICApICFnbG9iYWw7XG4gICAgJGxpbmstMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tbGluay0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnbGluay0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRsaW5rLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWxpbmstMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2xpbmstMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaW52ZXJzZS1saW5rOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWludmVyc2UtbGluayxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1saW5rJylcbiAgICApICFnbG9iYWw7XG4gICAgJGZpZWxkLTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWZpZWxkLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdmaWVsZC0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRmaWVsZC0wMjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1maWVsZC0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZmllbGQtMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaW52ZXJzZS0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pbnZlcnNlLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGludmVyc2UtMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW52ZXJzZS0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzdXBwb3J0LTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXN1cHBvcnQtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3N1cHBvcnQtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3VwcG9ydC0wMjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zdXBwb3J0LTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzdXBwb3J0LTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJHN1cHBvcnQtMDM6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3VwcG9ydC0wMyxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzdXBwb3J0LTA0OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXN1cHBvcnQtMDQsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3N1cHBvcnQtMDQnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaW52ZXJzZS1zdXBwb3J0LTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWludmVyc2Utc3VwcG9ydC0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1zdXBwb3J0LTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGludmVyc2Utc3VwcG9ydC0wMjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1pbnZlcnNlLXN1cHBvcnQtMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2Utc3VwcG9ydC0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnZlcnNlLXN1cHBvcnQtMDM6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taW52ZXJzZS1zdXBwb3J0LTAzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaW52ZXJzZS1zdXBwb3J0LTA0OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWludmVyc2Utc3VwcG9ydC0wNCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1zdXBwb3J0LTA0JylcbiAgICApICFnbG9iYWw7XG4gICAgJG92ZXJsYXktMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tb3ZlcmxheS0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnb3ZlcmxheS0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRkYW5nZXItMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZGFuZ2VyLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdkYW5nZXItMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZGFuZ2VyLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWRhbmdlci0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZGFuZ2VyLTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGZvY3VzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWZvY3VzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdmb2N1cycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnZlcnNlLWZvY3VzLXVpOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWludmVyc2UtZm9jdXMtdWksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtZm9jdXMtdWknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaG92ZXItcHJpbWFyeTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1ob3Zlci1wcmltYXJ5LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1wcmltYXJ5JylcbiAgICApICFnbG9iYWw7XG4gICAgJGFjdGl2ZS1wcmltYXJ5OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWFjdGl2ZS1wcmltYXJ5LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtcHJpbWFyeScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRob3Zlci1wcmltYXJ5LXRleHQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taG92ZXItcHJpbWFyeS10ZXh0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1wcmltYXJ5LXRleHQnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaG92ZXItc2Vjb25kYXJ5OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWhvdmVyLXNlY29uZGFyeSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItc2Vjb25kYXJ5JylcbiAgICApICFnbG9iYWw7XG4gICAgJGFjdGl2ZS1zZWNvbmRhcnk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tYWN0aXZlLXNlY29uZGFyeSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLXNlY29uZGFyeScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRob3Zlci10ZXJ0aWFyeTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1ob3Zlci10ZXJ0aWFyeSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItdGVydGlhcnknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYWN0aXZlLXRlcnRpYXJ5OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWFjdGl2ZS10ZXJ0aWFyeSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLXRlcnRpYXJ5JylcbiAgICApICFnbG9iYWw7XG4gICAgJGhvdmVyLXVpOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWhvdmVyLXVpLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci11aScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRob3Zlci1saWdodC11aTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1ob3Zlci1saWdodC11aSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItbGlnaHQtdWknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaG92ZXItc2VsZWN0ZWQtdWk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taG92ZXItc2VsZWN0ZWQtdWksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXNlbGVjdGVkLXVpJylcbiAgICApICFnbG9iYWw7XG4gICAgJGFjdGl2ZS11aTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1hY3RpdmUtdWksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS11aScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRhY3RpdmUtbGlnaHQtdWk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tYWN0aXZlLWxpZ2h0LXVpLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdhY3RpdmUtbGlnaHQtdWknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc2VsZWN0ZWQtdWk6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc2VsZWN0ZWQtdWksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NlbGVjdGVkLXVpJylcbiAgICApICFnbG9iYWw7XG4gICAgJHNlbGVjdGVkLWxpZ2h0LXVpOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNlbGVjdGVkLWxpZ2h0LXVpLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzZWxlY3RlZC1saWdodC11aScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpbnZlcnNlLWhvdmVyLXVpOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWludmVyc2UtaG92ZXItdWksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2UtaG92ZXItdWknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaG92ZXItZGFuZ2VyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWhvdmVyLWRhbmdlcixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItZGFuZ2VyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGFjdGl2ZS1kYW5nZXI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tYWN0aXZlLWRhbmdlcixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLWRhbmdlcicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRob3Zlci1yb3c6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taG92ZXItcm93LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1yb3cnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkdmlzaXRlZC1saW5rOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXZpc2l0ZWQtbGluayxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAndmlzaXRlZC1saW5rJylcbiAgICApICFnbG9iYWw7XG4gICAgJGRpc2FibGVkLTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWRpc2FibGVkLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdkaXNhYmxlZC0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRkaXNhYmxlZC0wMjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1kaXNhYmxlZC0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZGlzYWJsZWQtMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZGlzYWJsZWQtMDM6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZGlzYWJsZWQtMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc2FibGVkLTAzJylcbiAgICApICFnbG9iYWw7XG4gICAgJGhpZ2hsaWdodDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1oaWdobGlnaHQsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hpZ2hsaWdodCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRkZWNvcmF0aXZlLTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWRlY29yYXRpdmUtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2RlY29yYXRpdmUtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYnV0dG9uLXNlcGFyYXRvcjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1idXR0b24tc2VwYXJhdG9yLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdidXR0b24tc2VwYXJhdG9yJylcbiAgICApICFnbG9iYWw7XG4gICAgJHNrZWxldG9uLTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNrZWxldG9uLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdza2VsZXRvbi0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRza2VsZXRvbi0wMjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1za2VsZXRvbi0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc2tlbGV0b24tMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYnJhbmQtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tYnJhbmQtMDEsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2JyYW5kLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGJyYW5kLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWJyYW5kLTAyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdicmFuZC0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRicmFuZC0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1icmFuZC0wMyxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYnJhbmQtMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkYWN0aXZlLTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWFjdGl2ZS0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGhvdmVyLWZpZWxkOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWhvdmVyLWZpZWxkLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1maWVsZCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRkYW5nZXI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZGFuZ2VyLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdkYW5nZXInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0wMTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJHNwYWNpbmctMDI6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3BhY2luZy0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTAzOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0wNDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTA0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA0JylcbiAgICApICFnbG9iYWw7XG4gICAgJHNwYWNpbmctMDU6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3BhY2luZy0wNSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wNScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTA2OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMDYsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDYnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0wNzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTA3LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA3JylcbiAgICApICFnbG9iYWw7XG4gICAgJHNwYWNpbmctMDg6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3BhY2luZy0wOCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wOCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTA5OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMDksXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDknKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0xMDogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTEwLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTEwJylcbiAgICApICFnbG9iYWw7XG4gICAgJHNwYWNpbmctMTE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tc3BhY2luZy0xMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0xMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRzcGFjaW5nLTEyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LXNwYWNpbmctMTIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMTInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkc3BhY2luZy0xMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1zcGFjaW5nLTEzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTEzJylcbiAgICApICFnbG9iYWw7XG4gICAgJGZsdWlkLXNwYWNpbmctMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZmx1aWQtc3BhY2luZy0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZmx1aWQtc3BhY2luZy0wMScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRmbHVpZC1zcGFjaW5nLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWZsdWlkLXNwYWNpbmctMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ZsdWlkLXNwYWNpbmctMDInKVxuICAgICkgIWdsb2JhbDtcbiAgICAkZmx1aWQtc3BhY2luZy0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1mbHVpZC1zcGFjaW5nLTAzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTAzJylcbiAgICApICFnbG9iYWw7XG4gICAgJGZsdWlkLXNwYWNpbmctMDQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tZmx1aWQtc3BhY2luZy0wNCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZmx1aWQtc3BhY2luZy0wNCcpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRsYXlvdXQtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tbGF5b3V0LTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkbGF5b3V0LTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWxheW91dC0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTAyJylcbiAgICApICFnbG9iYWw7XG4gICAgJGxheW91dC0wMzogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1sYXlvdXQtMDMsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wMycpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRsYXlvdXQtMDQ6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tbGF5b3V0LTA0LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDQnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkbGF5b3V0LTA1OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWxheW91dC0wNSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTA1JylcbiAgICApICFnbG9iYWw7XG4gICAgJGxheW91dC0wNjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1sYXlvdXQtMDYsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2xheW91dC0wNicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRsYXlvdXQtMDc6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tbGF5b3V0LTA3LFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdsYXlvdXQtMDcnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkY29udGFpbmVyLTAxOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWNvbnRhaW5lci0wMSxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTAxJylcbiAgICApICFnbG9iYWw7XG4gICAgJGNvbnRhaW5lci0wMjogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1jb250YWluZXItMDIsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wMicpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRjb250YWluZXItMDM6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0tY29udGFpbmVyLTAzLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDMnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkY29udGFpbmVyLTA0OiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWNvbnRhaW5lci0wNCxcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTA0JylcbiAgICApICFnbG9iYWw7XG4gICAgJGNvbnRhaW5lci0wNTogdmFyKFxuICAgICAgLS0jeyRjdXN0b20tcHJvcGVydHktcHJlZml4fS1jb250YWluZXItMDUsXG4gICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wNScpXG4gICAgKSAhZ2xvYmFsO1xuICAgICRpY29uLXNpemUtMDE6IHZhcihcbiAgICAgIC0tI3skY3VzdG9tLXByb3BlcnR5LXByZWZpeH0taWNvbi1zaXplLTAxLFxuICAgICAgbWFwLWdldCgkdGhlbWUsICdpY29uLXNpemUtMDEnKVxuICAgICkgIWdsb2JhbDtcbiAgICAkaWNvbi1zaXplLTAyOiB2YXIoXG4gICAgICAtLSN7JGN1c3RvbS1wcm9wZXJ0eS1wcmVmaXh9LWljb24tc2l6ZS0wMixcbiAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaWNvbi1zaXplLTAyJylcbiAgICApICFnbG9iYWw7XG4gIH1cbiAgQGlmICRlbWl0LWN1c3RvbS1wcm9wZXJ0aWVzID09IHRydWUge1xuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludGVyYWN0aXZlLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaW50ZXJhY3RpdmUtMDEnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludGVyYWN0aXZlLTAxJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW50ZXJhY3RpdmUtMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnRlcmFjdGl2ZS0wMicsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW50ZXJhY3RpdmUtMDInKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpbnRlcmFjdGl2ZS0wMycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2ludGVyYWN0aXZlLTAzJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnRlcmFjdGl2ZS0wMycpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludGVyYWN0aXZlLTA0JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaW50ZXJhY3RpdmUtMDQnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludGVyYWN0aXZlLTA0JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAndWktYmFja2dyb3VuZCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ3VpLWJhY2tncm91bmQnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3VpLWJhY2tncm91bmQnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ3VpLTAxJywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd1aS0wMScsIG1hcC1nZXQoJHRoZW1lLCAndWktMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICd1aS0wMicsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgndWktMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAndWktMDMnLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3VpLTAzJywgbWFwLWdldCgkdGhlbWUsICd1aS0wMycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ3VpLTA0JywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd1aS0wNCcsIG1hcC1nZXQoJHRoZW1lLCAndWktMDQnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICd1aS0wNScsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgndWktMDUnLCBtYXAtZ2V0KCR0aGVtZSwgJ3VpLTA1JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAndGV4dC0wMScsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgndGV4dC0wMScsIG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ3RleHQtMDInLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3RleHQtMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICd0ZXh0LTAzJywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCd0ZXh0LTAzJywgbWFwLWdldCgkdGhlbWUsICd0ZXh0LTAzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAndGV4dC0wNCcsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgndGV4dC0wNCcsIG1hcC1nZXQoJHRoZW1lLCAndGV4dC0wNCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ3RleHQtMDUnLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3RleHQtMDUnLCBtYXAtZ2V0KCR0aGVtZSwgJ3RleHQtMDUnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAndGV4dC1lcnJvcicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgndGV4dC1lcnJvcicsIG1hcC1nZXQoJHRoZW1lLCAndGV4dC1lcnJvcicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2ljb24tMDEnLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2ljb24tMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2ljb24tMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdpY29uLTAyJywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdpY29uLTAyJywgbWFwLWdldCgkdGhlbWUsICdpY29uLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnaWNvbi0wMycsICRlbWl0LWRpZmZlcmVuY2UpIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaWNvbi0wMycsIG1hcC1nZXQoJHRoZW1lLCAnaWNvbi0wMycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2xpbmstMDEnLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2xpbmstMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2xpbmstMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdsaW5rLTAyJywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdsaW5rLTAyJywgbWFwLWdldCgkdGhlbWUsICdsaW5rLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludmVyc2UtbGluaycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaW52ZXJzZS1saW5rJywgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLWxpbmsnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdmaWVsZC0wMScsICRlbWl0LWRpZmZlcmVuY2UpXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdmaWVsZC0wMScsIG1hcC1nZXQoJHRoZW1lLCAnZmllbGQtMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdmaWVsZC0wMicsICRlbWl0LWRpZmZlcmVuY2UpXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdmaWVsZC0wMicsIG1hcC1nZXQoJHRoZW1lLCAnZmllbGQtMDInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW52ZXJzZS0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaW52ZXJzZS0wMScsIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpbnZlcnNlLTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdpbnZlcnNlLTAyJywgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3N1cHBvcnQtMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3N1cHBvcnQtMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ3N1cHBvcnQtMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3VwcG9ydC0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3VwcG9ydC0wMicsIG1hcC1nZXQoJHRoZW1lLCAnc3VwcG9ydC0wMicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzdXBwb3J0LTAzJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzdXBwb3J0LTAzJywgbWFwLWdldCgkdGhlbWUsICdzdXBwb3J0LTAzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3N1cHBvcnQtMDQnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3N1cHBvcnQtMDQnLCBtYXAtZ2V0KCR0aGVtZSwgJ3N1cHBvcnQtMDQnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW52ZXJzZS1zdXBwb3J0LTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaW52ZXJzZS1zdXBwb3J0LTAxJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDEnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpbnZlcnNlLXN1cHBvcnQtMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnZlcnNlLXN1cHBvcnQtMDInLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ludmVyc2Utc3VwcG9ydC0wMicpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludmVyc2Utc3VwcG9ydC0wMycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2ludmVyc2Utc3VwcG9ydC0wMycsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1zdXBwb3J0LTAzJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaW52ZXJzZS1zdXBwb3J0LTA0JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaW52ZXJzZS1zdXBwb3J0LTA0JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLXN1cHBvcnQtMDQnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdvdmVybGF5LTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdvdmVybGF5LTAxJywgbWFwLWdldCgkdGhlbWUsICdvdmVybGF5LTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnZGFuZ2VyLTAxJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2Rhbmdlci0wMScsIG1hcC1nZXQoJHRoZW1lLCAnZGFuZ2VyLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnZGFuZ2VyLTAyJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2Rhbmdlci0wMicsIG1hcC1nZXQoJHRoZW1lLCAnZGFuZ2VyLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnZm9jdXMnLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2ZvY3VzJywgbWFwLWdldCgkdGhlbWUsICdmb2N1cycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpbnZlcnNlLWZvY3VzLXVpJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaW52ZXJzZS1mb2N1cy11aScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaW52ZXJzZS1mb2N1cy11aScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hvdmVyLXByaW1hcnknLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdob3Zlci1wcmltYXJ5JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1wcmltYXJ5JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnYWN0aXZlLXByaW1hcnknLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdhY3RpdmUtcHJpbWFyeScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLXByaW1hcnknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdob3Zlci1wcmltYXJ5LXRleHQnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdob3Zlci1wcmltYXJ5LXRleHQnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLXByaW1hcnktdGV4dCcpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hvdmVyLXNlY29uZGFyeScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2hvdmVyLXNlY29uZGFyeScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItc2Vjb25kYXJ5JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnYWN0aXZlLXNlY29uZGFyeScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2FjdGl2ZS1zZWNvbmRhcnknLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS1zZWNvbmRhcnknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdob3Zlci10ZXJ0aWFyeScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2hvdmVyLXRlcnRpYXJ5JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci10ZXJ0aWFyeScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2FjdGl2ZS10ZXJ0aWFyeScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2FjdGl2ZS10ZXJ0aWFyeScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLXRlcnRpYXJ5JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdob3Zlci11aScsICRlbWl0LWRpZmZlcmVuY2UpXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdob3Zlci11aScsIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItdWknKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaG92ZXItbGlnaHQtdWknLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdob3Zlci1saWdodC11aScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItbGlnaHQtdWknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdob3Zlci1zZWxlY3RlZC11aScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2hvdmVyLXNlbGVjdGVkLXVpJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdob3Zlci1zZWxlY3RlZC11aScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnYWN0aXZlLXVpJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2FjdGl2ZS11aScsIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLXVpJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2FjdGl2ZS1saWdodC11aScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2FjdGl2ZS1saWdodC11aScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLWxpZ2h0LXVpJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc2VsZWN0ZWQtdWknLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NlbGVjdGVkLXVpJywgbWFwLWdldCgkdGhlbWUsICdzZWxlY3RlZC11aScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzZWxlY3RlZC1saWdodC11aScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ3NlbGVjdGVkLWxpZ2h0LXVpJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdzZWxlY3RlZC1saWdodC11aScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ludmVyc2UtaG92ZXItdWknLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdpbnZlcnNlLWhvdmVyLXVpJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdpbnZlcnNlLWhvdmVyLXVpJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnaG92ZXItZGFuZ2VyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdob3Zlci1kYW5nZXInLCBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLWRhbmdlcicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdhY3RpdmUtZGFuZ2VyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnYWN0aXZlLWRhbmdlcicsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYWN0aXZlLWRhbmdlcicpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnaG92ZXItcm93JywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2hvdmVyLXJvdycsIG1hcC1nZXQoJHRoZW1lLCAnaG92ZXItcm93JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3Zpc2l0ZWQtbGluaycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgndmlzaXRlZC1saW5rJywgbWFwLWdldCgkdGhlbWUsICd2aXNpdGVkLWxpbmsnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZGlzYWJsZWQtMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2Rpc2FibGVkLTAxJywgbWFwLWdldCgkdGhlbWUsICdkaXNhYmxlZC0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdkaXNhYmxlZC0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZGlzYWJsZWQtMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc2FibGVkLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2Rpc2FibGVkLTAzJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdkaXNhYmxlZC0wMycsIG1hcC1nZXQoJHRoZW1lLCAnZGlzYWJsZWQtMDMnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdoaWdobGlnaHQnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaGlnaGxpZ2h0JywgbWFwLWdldCgkdGhlbWUsICdoaWdobGlnaHQnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZGVjb3JhdGl2ZS0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2RlY29yYXRpdmUtMDEnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2RlY29yYXRpdmUtMDEnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdidXR0b24tc2VwYXJhdG9yJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnYnV0dG9uLXNlcGFyYXRvcicsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnYnV0dG9uLXNlcGFyYXRvcicpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NrZWxldG9uLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdza2VsZXRvbi0wMScsIG1hcC1nZXQoJHRoZW1lLCAnc2tlbGV0b24tMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc2tlbGV0b24tMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NrZWxldG9uLTAyJywgbWFwLWdldCgkdGhlbWUsICdza2VsZXRvbi0wMicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2JyYW5kLTAxJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2JyYW5kLTAxJywgbWFwLWdldCgkdGhlbWUsICdicmFuZC0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2JyYW5kLTAyJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2JyYW5kLTAyJywgbWFwLWdldCgkdGhlbWUsICdicmFuZC0wMicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2JyYW5kLTAzJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2JyYW5kLTAzJywgbWFwLWdldCgkdGhlbWUsICdicmFuZC0wMycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2FjdGl2ZS0wMScsICRlbWl0LWRpZmZlcmVuY2UpXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdhY3RpdmUtMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2FjdGl2ZS0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdob3Zlci1maWVsZCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaG92ZXItZmllbGQnLCBtYXAtZ2V0KCR0aGVtZSwgJ2hvdmVyLWZpZWxkJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnZGFuZ2VyJywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdkYW5nZXInLCBtYXAtZ2V0KCR0aGVtZSwgJ2RhbmdlcicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdjYXB0aW9uLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdjYXB0aW9uLTAxJywgbWFwLWdldCgkdGhlbWUsICdjYXB0aW9uLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnbGFiZWwtMDEnLCAkZW1pdC1kaWZmZXJlbmNlKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnbGFiZWwtMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2xhYmVsLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hlbHBlci10ZXh0LTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnaGVscGVyLXRleHQtMDEnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2hlbHBlci10ZXh0LTAxJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnYm9keS1zaG9ydC0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2JvZHktc2hvcnQtMDEnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2JvZHktc2hvcnQtMDEnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdib2R5LWxvbmctMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2JvZHktbG9uZy0wMScsIG1hcC1nZXQoJHRoZW1lLCAnYm9keS1sb25nLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2JvZHktc2hvcnQtMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdib2R5LXNob3J0LTAyJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdib2R5LXNob3J0LTAyJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnYm9keS1sb25nLTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdib2R5LWxvbmctMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2JvZHktbG9uZy0wMicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoJHRoZW1lLCAkcGFyZW50LWNhcmJvbi10aGVtZSwgJ2NvZGUtMDEnLCAkZW1pdC1kaWZmZXJlbmNlKSB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2NvZGUtMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2NvZGUtMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KCR0aGVtZSwgJHBhcmVudC1jYXJib24tdGhlbWUsICdjb2RlLTAyJywgJGVtaXQtZGlmZmVyZW5jZSkge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdjb2RlLTAyJywgbWFwLWdldCgkdGhlbWUsICdjb2RlLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2hlYWRpbmctMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2hlYWRpbmctMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2hlYWRpbmctMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTAxJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDEnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdoZWFkaW5nLTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdoZWFkaW5nLTAyJywgbWFwLWdldCgkdGhlbWUsICdoZWFkaW5nLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wMicsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTAyJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTAzJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTAzJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDMnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDQnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDQnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNCcpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAncHJvZHVjdGl2ZS1oZWFkaW5nLTA1JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTA2JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAncHJvZHVjdGl2ZS1oZWFkaW5nLTA2JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdwcm9kdWN0aXZlLWhlYWRpbmctMDYnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDcnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdwcm9kdWN0aXZlLWhlYWRpbmctMDcnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ3Byb2R1Y3RpdmUtaGVhZGluZy0wNycpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2V4cHJlc3NpdmUtaGVhZGluZy0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2V4cHJlc3NpdmUtaGVhZGluZy0wMScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1oZWFkaW5nLTAxJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZXhwcmVzc2l2ZS1oZWFkaW5nLTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZXhwcmVzc2l2ZS1oZWFkaW5nLTAyJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLWhlYWRpbmctMDInKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdleHByZXNzaXZlLWhlYWRpbmctMDMnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdleHByZXNzaXZlLWhlYWRpbmctMDMnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtaGVhZGluZy0wMycpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2V4cHJlc3NpdmUtaGVhZGluZy0wNCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2V4cHJlc3NpdmUtaGVhZGluZy0wNCcsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZXhwcmVzc2l2ZS1oZWFkaW5nLTA0JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZXhwcmVzc2l2ZS1oZWFkaW5nLTA1JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZXhwcmVzc2l2ZS1oZWFkaW5nLTA1JyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdleHByZXNzaXZlLWhlYWRpbmctMDUnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdleHByZXNzaXZlLWhlYWRpbmctMDYnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdleHByZXNzaXZlLWhlYWRpbmctMDYnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtaGVhZGluZy0wNicpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2V4cHJlc3NpdmUtcGFyYWdyYXBoLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZXhwcmVzc2l2ZS1wYXJhZ3JhcGgtMDEnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2V4cHJlc3NpdmUtcGFyYWdyYXBoLTAxJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAncXVvdGF0aW9uLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdxdW90YXRpb24tMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ3F1b3RhdGlvbi0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdxdW90YXRpb24tMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3F1b3RhdGlvbi0wMicsIG1hcC1nZXQoJHRoZW1lLCAncXVvdGF0aW9uLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2Rpc3BsYXktMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2Rpc3BsYXktMDEnLCBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc3BsYXktMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZGlzcGxheS0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnZGlzcGxheS0wMicsIG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheS0wMicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdkaXNwbGF5LTAzJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdkaXNwbGF5LTAzJywgbWFwLWdldCgkdGhlbWUsICdkaXNwbGF5LTAzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2Rpc3BsYXktMDQnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2Rpc3BsYXktMDQnLCBtYXAtZ2V0KCR0aGVtZSwgJ2Rpc3BsYXktMDQnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0wMScsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wMScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTAyJywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NwYWNpbmctMDMnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NwYWNpbmctMDMnLCBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDMnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0wNCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0wNCcsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wNCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTA1JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTA1JywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA1JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NwYWNpbmctMDYnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NwYWNpbmctMDYnLCBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDYnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0wNycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0wNycsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0wNycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTA4JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTA4JywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTA4JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NwYWNpbmctMDknLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NwYWNpbmctMDknLCBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMDknKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0xMCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0xMCcsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0xMCcpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdzcGFjaW5nLTExJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdzcGFjaW5nLTExJywgbWFwLWdldCgkdGhlbWUsICdzcGFjaW5nLTExJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ3NwYWNpbmctMTInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ3NwYWNpbmctMTInLCBtYXAtZ2V0KCR0aGVtZSwgJ3NwYWNpbmctMTInKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnc3BhY2luZy0xMycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnc3BhY2luZy0xMycsIG1hcC1nZXQoJHRoZW1lLCAnc3BhY2luZy0xMycpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdmbHVpZC1zcGFjaW5nLTAxJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZmx1aWQtc3BhY2luZy0wMScsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZmx1aWQtc3BhY2luZy0wMScpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ZsdWlkLXNwYWNpbmctMDInLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoXG4gICAgICAgICdmbHVpZC1zcGFjaW5nLTAyJyxcbiAgICAgICAgbWFwLWdldCgkdGhlbWUsICdmbHVpZC1zcGFjaW5nLTAyJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnZmx1aWQtc3BhY2luZy0wMycsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICAgJ2ZsdWlkLXNwYWNpbmctMDMnLFxuICAgICAgICBtYXAtZ2V0KCR0aGVtZSwgJ2ZsdWlkLXNwYWNpbmctMDMnKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdmbHVpZC1zcGFjaW5nLTA0JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KFxuICAgICAgICAnZmx1aWQtc3BhY2luZy0wNCcsXG4gICAgICAgIG1hcC1nZXQoJHRoZW1lLCAnZmx1aWQtc3BhY2luZy0wNCcpXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnbGF5b3V0LTAxJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2xheW91dC0wMScsIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnbGF5b3V0LTAyJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2xheW91dC0wMicsIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTAyJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnbGF5b3V0LTAzJywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2xheW91dC0wMycsIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTAzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnbGF5b3V0LTA0JywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2xheW91dC0wNCcsIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTA0JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnbGF5b3V0LTA1JywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2xheW91dC0wNScsIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTA1JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnbGF5b3V0LTA2JywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2xheW91dC0wNicsIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTA2JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdCgkdGhlbWUsICRwYXJlbnQtY2FyYm9uLXRoZW1lLCAnbGF5b3V0LTA3JywgJGVtaXQtZGlmZmVyZW5jZSlcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2xheW91dC0wNycsIG1hcC1nZXQoJHRoZW1lLCAnbGF5b3V0LTA3JykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2NvbnRhaW5lci0wMScsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnY29udGFpbmVyLTAxJywgbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDEnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnY29udGFpbmVyLTAyJyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdjb250YWluZXItMDInLCBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wMicpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdjb250YWluZXItMDMnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2NvbnRhaW5lci0wMycsIG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLTAzJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2NvbnRhaW5lci0wNCcsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnY29udGFpbmVyLTA0JywgbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItMDQnKSk7XG4gICAgfVxuXG4gICAgQGlmIHNob3VsZC1lbWl0KFxuICAgICAgJHRoZW1lLFxuICAgICAgJHBhcmVudC1jYXJib24tdGhlbWUsXG4gICAgICAnY29udGFpbmVyLTA1JyxcbiAgICAgICRlbWl0LWRpZmZlcmVuY2VcbiAgICApXG4gICAge1xuICAgICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5KCdjb250YWluZXItMDUnLCBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci0wNScpKTtcbiAgICB9XG5cbiAgICBAaWYgc2hvdWxkLWVtaXQoXG4gICAgICAkdGhlbWUsXG4gICAgICAkcGFyZW50LWNhcmJvbi10aGVtZSxcbiAgICAgICdpY29uLXNpemUtMDEnLFxuICAgICAgJGVtaXQtZGlmZmVyZW5jZVxuICAgIClcbiAgICB7XG4gICAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkoJ2ljb24tc2l6ZS0wMScsIG1hcC1nZXQoJHRoZW1lLCAnaWNvbi1zaXplLTAxJykpO1xuICAgIH1cblxuICAgIEBpZiBzaG91bGQtZW1pdChcbiAgICAgICR0aGVtZSxcbiAgICAgICRwYXJlbnQtY2FyYm9uLXRoZW1lLFxuICAgICAgJ2ljb24tc2l6ZS0wMicsXG4gICAgICAkZW1pdC1kaWZmZXJlbmNlXG4gICAgKVxuICAgIHtcbiAgICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eSgnaWNvbi1zaXplLTAyJywgbWFwLWdldCgkdGhlbWUsICdpY29uLXNpemUtMDInKSk7XG4gICAgfVxuICB9XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzZXQgdG8gZGVmYXVsdCB0aGVtZSBhZnRlciBhcHBseSBpbiBjb250ZW50XG4gIEBpZiAkY2FyYm9uLS10aGVtZSAhPSAkcGFyZW50LWNhcmJvbi10aGVtZSB7XG4gICAgJGNhcmJvbi0tdGhlbWU6ICRwYXJlbnQtY2FyYm9uLXRoZW1lICFnbG9iYWw7XG5cbiAgICBAaW5jbHVkZSBjYXJib24tLXRoZW1lKCk7XG4gIH1cbn1cbiJdfQ== */"] });
    return ReactionWizardComponent;
})();



/***/ })

}]);
//# sourceMappingURL=6-es2015.0518ae35e1caef42f82d.js.map