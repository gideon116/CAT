(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "80aS":
/*!**************************************************************************!*\
  !*** ./src/app/modules/molecules/add-molecule/add-molecule.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddMoleculeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoleculeComponent", function() { return AddMoleculeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _bitf_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitf/utils */ "j6om");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ "dJ3e");
/* harmony import */ var _shared_carbon_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/carbon-design */ "F8kB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_form_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/form-utilities */ "Zu7r");
/* harmony import */ var _shared_carbon_design_bx_loading_bx_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/carbon-design/bx-loading/bx-loading.component */ "r9lp");









function AddMoleculeComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ibm-bx-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
let AddMoleculeComponent = /*@__PURE__*/ (() => {
    class AddMoleculeComponent {
        constructor(apiService, formBuilder, bxToastMessagesService) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.bxToastMessagesService = bxToastMessagesService;
            this.isUploading = false;
        }
        ngOnInit() {
            this.createForm();
        }
        createForm() {
            this.fileInputForm = this.formBuilder.group({
                file: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            });
        }
        onSubmit() {
            if (!this.fileInputForm.valid) {
                return;
            }
            const nativeElement = this.fileInputForm.get('file').nativeElement;
            const fileCount = nativeElement.files.length;
            if (fileCount > 0) {
                const files = Array.from(nativeElement.files);
                this.isUploading = true;
                const fileValidationRules = {
                    files,
                    extensions: ['txt'],
                    maxFileSize: 50000,
                    maxNumberOfFiles: 1,
                };
                const validationResult = Object(_bitf_utils__WEBPACK_IMPORTED_MODULE_1__["inputFileValidator"])(fileValidationRules);
                if (validationResult.isValid) {
                    this.apiService.molecules.upload({ files }).subscribe(success => {
                        this.bxToastMessagesService.showSuccess('Files uploaded', 'Files succesfully uploaded');
                        this.isUploading = false;
                    }, error => {
                        this.bxToastMessagesService.showError('An error occured', 'During files upload an error occured: ' + JSON.stringify(error));
                        this.isUploading = false;
                    });
                }
                else {
                    this.bxToastMessagesService.showError('Invalid files', 'Attached files are not valid! Error list: ' + validationResult.errors.join(' | '));
                    this.isUploading = false;
                }
            }
        }
        closeModal() { }
    }
    AddMoleculeComponent.ɵfac = function AddMoleculeComponent_Factory(t) { return new (t || AddMoleculeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_carbon_design__WEBPACK_IMPORTED_MODULE_4__["ToastMessagesService"])); };
    AddMoleculeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddMoleculeComponent, selectors: [["ibm-add-molecule"]], decls: 12, vars: 4, consts: [[1, "bx--modal-content"], [1, "bx--row"], [1, "add-molecule-modal-content", "bx--col-sm-4"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], ["ibmNativeElementInjector", "", "type", "file", "formControlName", "file", "placeholder", "Upload file...", "multiple", ""], ["type", "submit"], [1, "bx--modal-footer"], ["type", "button", 1, "bx--btn", "bx--btn--primary", 3, "click"]], template: function AddMoleculeComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AddMoleculeComponent_div_3_Template, 2, 0, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddMoleculeComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Upload");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddMoleculeComponent_Template_button_click_10_listener() { return ctx.closeModal(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Close");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUploading);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hidden", ctx.isUploading);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.fileInputForm);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _shared_form_utilities__WEBPACK_IMPORTED_MODULE_6__["NativeElementInjectorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _shared_carbon_design_bx_loading_bx_loading_component__WEBPACK_IMPORTED_MODULE_7__["BxLoadingComponent"]], styles: [".add-molecule-modal-content[_ngcontent-%COMP%] {\n  min-height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FkZC1tb2xlY3VsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiYWRkLW1vbGVjdWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1tb2xlY3VsZS1tb2RhbC1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMTIwcHg7XG59XG4iXX0= */"] });
    return AddMoleculeComponent;
})();



/***/ }),

/***/ "SoOp":
/*!**************************************************************!*\
  !*** ./src/app/modules/molecules/molecules-shared.module.ts ***!
  \**************************************************************/
/*! exports provided: MoleculesSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoleculesSharedModule", function() { return MoleculesSharedModule; });
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/shared.module */ "PCNd");
/* harmony import */ var _modules_molecules_molecules_list_molecules_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/molecules/molecules-list/molecules-list.component */ "ztgT");
/* harmony import */ var _modules_molecules_molecule_svg_molecule_svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/molecules/molecule-svg/molecule-svg.component */ "pLnR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MoleculesSharedModule = /*@__PURE__*/ (() => {
    class MoleculesSharedModule {
    }
    MoleculesSharedModule.ɵfac = function MoleculesSharedModule_Factory(t) { return new (t || MoleculesSharedModule)(); };
    MoleculesSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MoleculesSharedModule });
    MoleculesSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]] });
    return MoleculesSharedModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MoleculesSharedModule, { declarations: [_modules_molecules_molecules_list_molecules_list_component__WEBPACK_IMPORTED_MODULE_1__["MoleculesListComponent"], _modules_molecules_molecule_svg_molecule_svg_component__WEBPACK_IMPORTED_MODULE_2__["MoleculeSvgComponent"]], imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]], exports: [_modules_molecules_molecules_list_molecules_list_component__WEBPACK_IMPORTED_MODULE_1__["MoleculesListComponent"], _modules_molecules_molecule_svg_molecule_svg_component__WEBPACK_IMPORTED_MODULE_2__["MoleculeSvgComponent"]] }); })();



/***/ }),

/***/ "pLnR":
/*!**************************************************************************!*\
  !*** ./src/app/modules/molecules/molecule-svg/molecule-svg.component.ts ***!
  \**************************************************************************/
/*! exports provided: MoleculeSvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoleculeSvgComponent", function() { return MoleculeSvgComponent; });
/* harmony import */ var _shared_common_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/common-utilities */ "82np");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services */ "dJ3e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_carbon_design_bx_loading_bx_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/carbon-design/bx-loading/bx-loading.component */ "r9lp");





function MoleculeSvgComponent_ibm_bx_loading_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ibm-bx-loading", 3);
    }
}
function MoleculeSvgComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 4);
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r1.svg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
}
function MoleculeSvgComponent_img_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 5);
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.imgSvg.base64Url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    }
}
let MoleculeSvgComponent = /*@__PURE__*/ (() => {
    class MoleculeSvgComponent {
        constructor(apiService) {
            this.apiService = apiService;
        }
        ngOnInit() {
            if (this.molecule.moleculeImage) {
                // this.svg = this.molecule.moleculeImage;
                // Note This should work when IBM will give us the new molecules svg
                this.imgSvg = Object(_shared_common_utilities__WEBPACK_IMPORTED_MODULE_0__["svgToUrl"])(this.molecule.moleculeImage);
            }
            else {
                this.apiService.actions.convertSimlesToSvgs([this.molecule.smiles]).subscribe(response => {
                    this.imgSvg = Object(_shared_common_utilities__WEBPACK_IMPORTED_MODULE_0__["svgToUrl"])(response.content.data[0]);
                });
            }
        }
    }
    MoleculeSvgComponent.ɵfac = function MoleculeSvgComponent_Factory(t) { return new (t || MoleculeSvgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
    MoleculeSvgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoleculeSvgComponent, selectors: [["ibm-molecule-svg"]], inputs: { molecule: "molecule" }, decls: 3, vars: 3, consts: [["size", "3rem", 4, "ngIf"], [3, "innerHtml", 4, "ngIf"], ["alt", "", 3, "src", 4, "ngIf"], ["size", "3rem"], [3, "innerHtml"], ["alt", "", 3, "src"]], template: function MoleculeSvgComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MoleculeSvgComponent_ibm_bx_loading_0_Template, 1, 0, "ibm-bx-loading", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MoleculeSvgComponent_div_1_Template, 1, 1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MoleculeSvgComponent_img_2_Template, 1, 1, "img", 2);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.svg && !ctx.imgSvg);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.svg);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imgSvg);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_carbon_design_bx_loading_bx_loading_component__WEBPACK_IMPORTED_MODULE_4__["BxLoadingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2xlY3VsZS1zdmcuY29tcG9uZW50LnNjc3MifQ== */"] });
    return MoleculeSvgComponent;
})();



/***/ }),

/***/ "ztgT":
/*!******************************************************************************!*\
  !*** ./src/app/modules/molecules/molecules-list/molecules-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: MoleculesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoleculesListComponent", function() { return MoleculesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bitf_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitf/api */ "dG+F");
/* harmony import */ var _modules_molecules_add_molecule_add_molecule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/molecules/add-molecule/add-molecule.component */ "80aS");
/* harmony import */ var _app_modules_projects_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/projects/new-project/new-project.component */ "9cDe");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ "dJ3e");
/* harmony import */ var _shared_carbon_design__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/carbon-design */ "F8kB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_common_utilities_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/common-utilities/search-bar/search-bar.component */ "KGsc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_common_utilities_actions_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/common-utilities/actions/actions.component */ "hoLX");
/* harmony import */ var _shared_common_utilities_grid_list_view_grid_list_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/common-utilities/grid-list-view/grid-list-view.component */ "bXEF");
/* harmony import */ var _shared_carbon_design_bx_pagination_bx_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/carbon-design/bx-pagination/bx-pagination.component */ "u9GO");
/* harmony import */ var _shared_common_utilities_filters_filters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/common-utilities/filters/filters.component */ "jnIP");
/* harmony import */ var _shared_carbon_design_bx_dropdown_bx_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/carbon-design/bx-dropdown/bx-dropdown.component */ "Kcv9");
/* harmony import */ var _modules_molecules_molecule_svg_molecule_svg_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/molecules/molecule-svg/molecule-svg.component */ "pLnR");
/* harmony import */ var _shared_icons_delete_icon_delete_icon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/icons/delete-icon/delete-icon.component */ "KW4w");


















function MoleculesListComponent_ibm_filters_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ibm-filters", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hideFilters", function MoleculesListComponent_ibm_filters_12_Template_ibm_filters_hideFilters_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hideFilters(); })("cancel", function MoleculesListComponent_ibm_filters_12_Template_ibm_filters_cancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.hideFilters(); })("filtersChange", function MoleculesListComponent_ibm_filters_12_Template_ibm_filters_filtersChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filters", ctx_r0.allowedFilters)("filtersValues", ctx_r0.filters == null ? null : ctx_r0.filters.filtersValues);
    }
}
const _c0 = function () { return ["property", "direction"]; };
function MoleculesListComponent_ibm_bx_dropdown_25_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ibm-bx-dropdown", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function MoleculesListComponent_ibm_bx_dropdown_25_Template_ibm_bx_dropdown_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.sortOptions)("compositeKey", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("selectedValue", ctx_r1.currentSorting);
    }
}
function MoleculesListComponent_div_35_ibm_actions_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ibm-actions", 18);
    }
    if (rf & 2) {
        const molecule_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actions", ctx_r13.actions[molecule_r11.id]);
    }
}
function MoleculesListComponent_div_35_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "article", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MoleculesListComponent_div_35_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const molecule_r11 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onMoleculeCheckboxClick(molecule_r11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MoleculesListComponent_div_35_ibm_actions_15_Template, 1, 1, "ibm-actions", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ibm-molecule-svg", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoleculesListComponent_div_35_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const molecule_r11 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.delete(molecule_r11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ibm-delete-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const molecule_r11 = ctx.$implicit;
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", molecule_r11.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", molecule_r11.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", molecule_r11.id)("checked", ctx_r3.isMoleculeSelected(molecule_r11));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", molecule_r11.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.actions[molecule_r11.id]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("molecule", molecule_r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](molecule_r11.smiles);
    }
}
function MoleculesListComponent_div_39_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No results.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
const _c1 = function () { return [8, 16, 24]; };
let MoleculesListComponent = /*@__PURE__*/ (() => {
    class MoleculesListComponent {
        constructor(apiService, bxModalService, modalService, toastMessagesService, ketcherDataService, router) {
            this.apiService = apiService;
            this.bxModalService = bxModalService;
            this.modalService = modalService;
            this.toastMessagesService = toastMessagesService;
            this.ketcherDataService = ketcherDataService;
            this.router = router;
            this.header = '';
            this.allowedFilters = [];
            this.allowedActions = [];
            this.allowedButtons = [];
            this.defaultFirstPage = 0;
            this.defaultItemsPerPage = 8;
            this.allowedSort = [];
            this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.deleteAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.smileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.moleculesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.viewMode = 'grid';
            this.selectedMolecules = [];
            this.currentSorting = null;
            this.searchData = {
                searchString: '',
                isSmiles: false,
            };
            this.actions = [];
        }
        set apiResponse(apiResponse) {
            this.actions = [];
            if (!apiResponse) {
                return;
            }
            apiResponse.content.forEach((molecule) => {
                this.actions[molecule.id] = this.getActions(molecule);
            });
            this.molecules = apiResponse.content;
            this.pagination = apiResponse.pagination;
            this.currentSorting =
                apiResponse.sorting && apiResponse.sorting[0] ? apiResponse.sorting[0] : undefined;
        }
        ngOnInit() {
            this.currentSorting = this.sortOptions.find(sortOption => sortOption.value.default).value;
            this.doSearch({ page: this.defaultFirstPage, size: this.defaultItemsPerPage });
        }
        toggleFilters() {
            setTimeout(() => {
                this.showFilters = !this.showFilters;
            });
        }
        hideFilters() {
            this.showFilters = false;
        }
        get sortOptions() {
            return [
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
                        default: true,
                    },
                },
            ].filter((sortOption) => this.allowedSort.includes(sortOption.value.property));
        }
        get bulkActions() {
            let bulkActions = [];
            bulkActions.push({
                label: 'Add molecule',
                value: null,
                action: () => this.onBulkAddMolecule(),
                id: 'add-to-workspace',
            });
            bulkActions.push({
                label: 'Delete',
                value: null,
                action: () => this.onBulkDelete(),
                id: 'delete',
            });
            bulkActions = bulkActions.filter((action) => this.allowedActions.includes(action.id));
            return bulkActions;
        }
        get allSelected() {
            return (this.molecules &&
                this.molecules.length > 0 &&
                this.selectedMolecules.length === this.molecules.length);
        }
        onSearch(event) {
            this.searchData = event;
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
        onPageChanged(pagination) {
            this.doSearch({ size: pagination.size, page: pagination.page });
        }
        onSort(sorting) {
            this.currentSorting = sorting.value;
            this.doSearch({ page: this.defaultFirstPage, size: this.pagination.size });
        }
        getActions(molecule) {
            return [
                {
                    label: 'Add molecule',
                    value: null,
                    action: () => this.addMolecule(molecule),
                    id: 'add-to-workspace',
                },
            ].filter((action) => this.allowedActions.includes(action.id));
        }
        onMoleculeCheckboxClick(selectedMolecule) {
            if (this.selectedMolecules.includes(selectedMolecule)) {
                this.selectedMolecules = this.selectedMolecules.filter((molecule) => molecule.id !== selectedMolecule.id);
            }
            else {
                this.selectedMolecules.push(selectedMolecule);
            }
        }
        onSelectAllChange(event) {
            if (event.target.checked) {
                this.selectedMolecules = [...this.molecules];
            }
            else {
                this.selectedMolecules = [];
            }
        }
        isMoleculeSelected(molecule) {
            return this.selectedMolecules.includes(molecule);
        }
        doSearch(params = {}) {
            if (this.searchData && this.searchData.searchString.length) {
                params.queryParams = { smiles: this.searchData.searchString };
                // if (!this.searchData.isSmiles) {
                //   params.query = getMongoQuery(this.filters, this.searchData.searchString, ['smiles']);
                // } else {
                // params.queryParams = { smiles: this.searchData.searchString };
                // }
            }
            params.sorting = [this.currentSorting];
            this.actions = [];
            this.search.emit(params);
        }
        changeViewMode(viewMode) {
            this.viewMode = viewMode;
        }
        addMoleculeToList() {
            this.bxModalService.showModal(_modules_molecules_add_molecule_add_molecule_component__WEBPACK_IMPORTED_MODULE_2__["AddMoleculeComponent"], {});
        }
        delete(molecule) {
            this.deleteAction.emit(molecule);
        }
        onBulkDelete() {
            if (!this.selectedMolecules.length) {
                return;
            }
            this.deleteAction.emit(this.selectedMolecules);
        }
        onBulkAddMolecule() {
            if (!this.selectedMolecules.length) {
                return;
            }
            const smiles = this.selectedMolecules.map((molecule) => molecule.smiles);
            this.moleculesChange.emit(this.selectedMolecules);
            this.selectedMolecules = [];
            this.sendSmilesToWorkspace(smiles);
        }
        addMolecule(molecule) {
            this.moleculesChange.emit([molecule]);
            this.sendSmilesToWorkspace([molecule.smiles]);
        }
        sendSmilesToWorkspace(smiles) {
            if (this.emitSmiles) {
                this.smileChange.emit(smiles);
            }
            else {
                this.ketcherDataService.smiles = smiles;
                this.startNewProject();
            }
        }
        startNewProject() {
            this.modalService.showModal(_app_modules_projects_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_3__["NewProjectComponent"]);
        }
        onExport() {
            this.apiService.molecules.export().subscribe(result => {
                this.toastMessagesService.showSuccess('Molecules export', 'Molecules has been exported');
            }, error => {
                this.toastMessagesService.showError('Molecules export', 'Error during molecules export');
            });
        }
    }
    MoleculesListComponent.ɵfac = function MoleculesListComponent_Factory(t) { return new (t || MoleculesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_carbon_design__WEBPACK_IMPORTED_MODULE_5__["BxModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_carbon_design__WEBPACK_IMPORTED_MODULE_5__["BxModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_carbon_design__WEBPACK_IMPORTED_MODULE_5__["ToastMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_4__["KetcherDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
    MoleculesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoleculesListComponent, selectors: [["ibm-molecules-list"]], inputs: { emitSmiles: "emitSmiles", header: "header", filters: "filters", allowedFilters: "allowedFilters", allowedActions: "allowedActions", allowedButtons: "allowedButtons", defaultFirstPage: "defaultFirstPage", defaultItemsPerPage: "defaultItemsPerPage", allowedSort: "allowedSort", apiResponse: "apiResponse" }, outputs: { search: "search", deleteAction: "deleteAction", smileChange: "smileChange", moleculesChange: "moleculesChange" }, decls: 40, vars: 16, consts: [[1, "bx--grid--full-width", "mt-2"], [1, "bx--row"], [1, "bx--col-lg-8", "align", "align-left"], [1, "bx--type-alfa", "mr-1"], [1, "bx--tag", "bx--tag--gray"], [1, "bx--col-lg-8", "align", "align-right", "position-relative"], ["placeholder", "Search molecules by \"smiles\" or use ketcher", 1, "w-100", "mr-05", 3, "showKetcherButton", "searchChange"], [1, "show-filters-button", 3, "disabled", "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill-rule", "evenodd"], ["d", "M10.9 3c-.4-1.7-2-3-3.9-3S3.6 1.3 3.1 3H0v2h3.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3H24V3H10.9zM7 5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm10 3c-1.9 0-3.4 1.3-3.9 3H0v2h13.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3H24v-2h-3.1c-.5-1.7-2-3-3.9-3zm0 5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM7 16c-1.9 0-3.4 1.3-3.9 3H0v2h3.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3H24v-2H10.9c-.5-1.7-2-3-3.9-3zm0 5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"], [3, "filters", "filtersValues", "hideFilters", "cancel", "filtersChange", 4, "ngIf"], [1, "bx--row", "mt-1", "mb-2"], [1, "bx--col-md-8", "bx--col-lg-11"], [1, "align", "align-left"], [1, "bx--form-item", "bx--checkbox-wrapper", "align", "align-center", "m-auto", "mr-1"], ["id", "select-all", "name", "checkbox", "type", "checkbox", 1, "bx--checkbox", 3, "ngModel", "change"], ["for", "select-all", 1, "bx--checkbox-label", "ibm-label-align"], [1, "bx--select", "ibm--select"], [3, "actions"], [1, "bx--col-md-8", "bx--col-lg-5"], [1, "align", "align-right"], [1, "bx--select", "ibm--select", "align-items-end"], ["label", "Sort by", 3, "options", "compositeKey", "selectedValue", "select", 4, "ngIf"], ["type", "button", "title", "Grid View", 1, "btn--clean", "ml-2", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill-rule", "evenodd"], ["d", "M0 0h7v7H0zm9 0h7v7H9zM0 9h7v7H0zm9 0h7v7H9z"], ["type", "button", "title", "List View", 1, "btn--clean", 3, "click"], ["width", "16", "height", "14", "viewBox", "0 0 16 14", "fill-rule", "evenodd"], ["d", "M0 0h16v2H0zm0 4h16v2H0zm0 4h16v2H0zm0 4h16v2H0z"], [1, "bx--col-md-8", 3, "items", "viewMode", "gridItemsPerRow"], ["girdListCmp", ""], ["class", "bx--col-md-8 bx--col-xlg-5 bx--col-max-5 mb-2", 4, "ngFor", "ngForOf"], [1, "bx--col-sm-4"], [3, "paginationSettings", "itemsPerPage", "pageChanged"], ["class", "bx--grid", 4, "ngIf"], [3, "filters", "filtersValues", "hideFilters", "cancel", "filtersChange"], ["label", "Sort by", 3, "options", "compositeKey", "selectedValue", "select"], [1, "bx--col-md-8", "bx--col-xlg-5", "bx--col-max-5", "mb-2"], ["gridListItem", ""], ["aria-labelledby", "molecule", 1, "bx--card", "ibm--card"], [1, "bx--card__card-overview", "ibm--card__overview"], [1, "bx--card-overview__about", "pt-0"], [1, "bx--about__title", "ibm--card__molecule", "mt-0", "pt-0"], [1, "ibm--card__molecule--name", "align", "align-center", "mb-1"], [1, "font-weight-semibold", 3, "title"], [1, "bx--form-item", "bx--checkbox-wrapper", "mt-0", "align", "align-items-end"], ["name", "checkbox", "type", "checkbox", 1, "bx--checkbox", 3, "id", "checked", "change"], [1, "bx--checkbox-label"], [1, "ibm--card__molecule--actions", "align", "align-center"], [1, "ibm--card__molecule--usage", "muted", "small--xs"], [3, "actions", 4, "ngIf"], [1, "ibm--card__molecule-preview", "pt-2", 3, "molecule"], [1, "bx--card-footer", "ibm--card__footer", "small--xs", "align", "align-center"], [1, "ibm--card__molecule-formula", "small--xs"], [1, "align-right", "ibm--card__molecule--bottom-panel"], ["type", "button", "title", "Remove", 1, "btn--clean", "btn--clean--sm", "ibm--card__molecule--bottom-panel--remove-button", 3, "click"], [1, "bx--grid"], [1, "bx--col-sm-4", "text-center"], [1, "display-1", "mt-3", "mb-2"]], template: function MoleculesListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ibm-search-bar", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function MoleculesListComponent_Template_ibm_search_bar_searchChange_8_listener($event) { return ctx.onSearch($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoleculesListComponent_Template_button_click_9_listener() { return ctx.toggleFilters(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MoleculesListComponent_ibm_filters_12_Template, 1, 2, "ibm-filters", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MoleculesListComponent_Template_input_change_17_listener($event) { return ctx.onSelectAllChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Select all ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ibm-actions", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MoleculesListComponent_ibm_bx_dropdown_25_Template, 1, 4, "ibm-bx-dropdown", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoleculesListComponent_Template_button_click_26_listener() { return ctx.changeViewMode("grid"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoleculesListComponent_Template_button_click_29_listener() { return ctx.changeViewMode("list"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ibm-grid-list-view", 29, 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MoleculesListComponent_div_35_Template, 24, 8, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ibm-bx-pagination", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function MoleculesListComponent_Template_ibm_bx_pagination_pageChanged_38_listener($event) { return ctx.onPageChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MoleculesListComponent_div_39_Template, 5, 0, "div", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total: ", ctx.pagination == null ? null : ctx.pagination.totalItems, " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showKetcherButton", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.showFilters);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFilters);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.allSelected);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actions", ctx.bulkActions);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortOptions);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.molecules)("viewMode", ctx.viewMode)("gridItemsPerRow", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.molecules);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paginationSettings", ctx.pagination)("itemsPerPage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pagination == null ? null : ctx.pagination.totalItems) === 0);
            }
        }, directives: [_shared_common_utilities_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__["SearchBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _shared_common_utilities_actions_actions_component__WEBPACK_IMPORTED_MODULE_10__["ActionsComponent"], _shared_common_utilities_grid_list_view_grid_list_view_component__WEBPACK_IMPORTED_MODULE_11__["GridListViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_carbon_design_bx_pagination_bx_pagination_component__WEBPACK_IMPORTED_MODULE_12__["BxPaginationComponent"], _shared_common_utilities_filters_filters_component__WEBPACK_IMPORTED_MODULE_13__["FiltersComponent"], _shared_carbon_design_bx_dropdown_bx_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["BxDropdownComponent"], _modules_molecules_molecule_svg_molecule_svg_component__WEBPACK_IMPORTED_MODULE_15__["MoleculeSvgComponent"], _shared_icons_delete_icon_delete_icon_component__WEBPACK_IMPORTED_MODULE_16__["DeleteIconComponent"]], styles: [".ibm--card__molecule--bottom-panel--remove-button[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vbGVjdWxlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsWUFBQTtBQUROIiwiZmlsZSI6Im1vbGVjdWxlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlibS0tY2FyZF9fbW9sZWN1bGUge1xuICAmLS1ib3R0b20tcGFuZWwge1xuICAgICYtLXJlbW92ZS1idXR0b24ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return MoleculesListComponent;
})();



/***/ })

}]);
//# sourceMappingURL=3-es2015.ccfd1eedd37fbf69feae.js.map