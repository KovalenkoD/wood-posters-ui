import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from "@angular/http";
import { NgxCarouselModule } from 'ngx-carousel';
import { NguiStickyModule } from '@ngui/sticky';
import 'hammerjs';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatMenuModule} from '@angular/material/menu';
import {ColorPickerModule} from 'ngx-color-picker';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


import {OrderByPipe} from "./pypes/order.by.pipe"


import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatExpansionModule,
  MatDialogModule
} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';


import { CartService } from './services/cart.service';
import { CategoryService } from './services/category.service';
import { ProductTypeService } from './services/product-type.service';
import { ProductService } from './services/product.service';
import { SearchService } from './services/search.service';
import {RestService} from "./services/rest.service";
import {FilterResultService} from "./services/filter-result.service"

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { CollectionsPageComponent } from './components/pages/collections-page/collections-page.component';
import { TrendsPageComponent } from './components/pages/trends-page/trends-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { AboutUsPageComponent } from './components/pages/about-us-page/about-us-page.component';
import { ThankYouPageComponent } from './components/pages/thank-you-page/thank-you-page.component';
import { HomeSliderComponent } from './components/common/home-slider/home-slider.component';
import { PopularProductsComponent } from './components/common/popular-products/popular-products.component';
import { PopularCollectionsComponent } from './components/common/popular-collections/popular-collections.component';
import { InteractiveImageComponent } from './components/common/interactive-image/interactive-image.component';
import { SubscribeNewsComponent } from './components/common/subscribe-news/subscribe-news.component';
import { SearchComponent } from './components/common/search/search.component';
import { ProductSingleComponent } from './components/common/product-single/product-single.component';
import { CategorySingleComponent } from './components/common/category-single/category-single.component';
import { NguiInViewComponent } from './components/common/ng-ui-in-view/ngui-in-view.component';


import { CartComponent } from './components/common/cart/cart.component';
import { SummaryComponent } from './components/common/payment/summary/summary.component';
import { CollectionSingleComponent } from './components/common/collection-single/collection-single.component';
import { FilterPanelComponent } from './components/common/filter-panel/filter-panel.component';
import { FilterSidebarComponent } from './components/common/filter-sidebar/filter-sidebar.component';
import { FilterResultComponent } from './components/common/filter-result/filter-result.component';
import { CategoriesResultComponent } from './components/common/categories-result/categories-result.component';
import { PosterComponent } from './components/common/poster/poster.component';
import { PostersGalleryComponent } from './components/common/posters-gallery/posters-gallery.component';
import { ProductDetailsComponent } from './components/common/product-details/product-details.component';
import { SimilarProductsComponent } from './components/common/similar-products/similar-products.component';
import { WallGalleryPopupComponent } from './components/common/wall-gallery-popup/wall-gallery-popup.component';
import {CategoriesPageComponent} from "./components/pages/categories-page/categories-page.component";
import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
import {OrdersPageComponent} from './components/pages/orders-page/orders-page.component'
import { CategoriesComponent } from './components/common/admin/categories/categories.component';
import { SingleCategoryComponent } from './components/common/admin/categories/single-category/single-category.component';
import { CurrentCategoriesComponent } from './components/common/admin/categories/current-categories/current-categories.component';
import { SingleMaterialComponent} from './components/common/admin/material/single-material/single-material.component';
import { MaterialsComponent } from './components/common/admin/material/materials.component';

import { CurrentColorsComponent } from './components/common/admin/colors/current-colors/current-colors.component';
import { SingleColorComponent} from './components/common/admin/colors/single-color/single-color.component';
import { ColorsComponent } from './components/common/admin/colors/colors.component';

import { OrdersComponent } from './components/common/admin/orders/orders.component';
import { CurrentOrdersComponent } from './components/common/admin/orders/current-orders/current-orders.component';
import { AnsweredOrdersComponent } from './components/common/admin/orders/answered-orders/answered-orders.component';
import { FinishedOrdersComponent } from './components/common/admin/orders/finished-orders/finished-orders.component';
import { CanceledOrdersComponent } from './components/common/admin/orders/canceled-orders/canceled-orders.component';

import { OnTheWayOrdersComponent } from './components/common/admin/orders/on-the-way/on-the-way-orders.component';


import { CurrentMaterialsComponent } from './components/common/admin/material/current-materials/current-materials.component';
import { TypesComponent } from './components/common/admin/type/types.component';
import { CurrentTypesComponent } from './components/common/admin/type/current-types/current-types.component';
import { SingleTypeComponent } from './components/common/admin/type/single-type/single-type.component';
import { MobileNavComponent } from './components/common/mobile-nav/mobile-nav.component';
import {ProductsComponent} from "./components/common/admin/products/products.component";
import {CurrentProductsComponent} from "./components/common/admin/products/current-products/current-products.component";
import {SingleProductComponent} from "./components/common/admin/products/single-product/single-product.component";
import {TechnologyService} from "./services/technology.service";
import {MaterialService} from "./services/material.service";
import {ProductColorService} from "./services/product.color.service";

import {LocaleService} from "./services/locale.service";
import {CollectionsComponent} from "./components/common/admin/collections/collections.component";
import {CurrentCollectionsComponent} from "./components/common/admin/collections/current-collections/current-collections.component";
import {SingleCollectionComponent} from "./components/common/admin/collections/single-collection/single-collection.component";
import { TechnologyComponent } from './components/common/admin/technology/technology.component';
import { CurrentTechnologiesComponent } from './components/common/admin/technology/current-technologies/current-technologies.component';
import { SingleTechnologyComponent } from './components/common/admin/technology/single-technology/single-technology.component';
import {FacebookPixelService} from "./services/facebook.pixel.service";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'search',
    component: SearchPageComponent
  },
  { path: 'home',
    component: HomePageComponent
  },
  { path: 'payment',
    component: PaymentPageComponent
  },
  { path: 'about-us',
    component: AboutUsPageComponent
  },
  { path: 'thank-you',
    component: ThankYouPageComponent
  },
  { path: 'product/:id',
    component: ProductPageComponent
  },
  { path: 'collections',
    component: CollectionsPageComponent
  },
  { path: 'trends',
    component: TrendsPageComponent
  },
  { path: 'category',
    component: CategoriesPageComponent
  },
  { path: 'category/:id',
    component: CategoryPageComponent
  },
  { path: 'admin',
    component: AdminPageComponent
  },
  { path: 'orders',
    component: OrdersPageComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomePageComponent,
    SearchPageComponent,
    CategoryPageComponent,
    CategoriesPageComponent,
    ProductPageComponent,
    CollectionsPageComponent,
    TrendsPageComponent,
    PaymentPageComponent,
    AboutUsPageComponent,
    ThankYouPageComponent,
    HomeSliderComponent,
    PopularProductsComponent,
    PopularCollectionsComponent,
    InteractiveImageComponent,
    SubscribeNewsComponent,
    SearchComponent,
    ProductSingleComponent,
    CategorySingleComponent,
    CartComponent,
    SummaryComponent,
    CollectionSingleComponent,
    FilterPanelComponent,
    FilterSidebarComponent,
    FilterResultComponent,
    CategoriesResultComponent,
    PosterComponent,
    PostersGalleryComponent,
    ProductDetailsComponent,
    SimilarProductsComponent,
    WallGalleryPopupComponent,
    AdminPageComponent,
    OrdersPageComponent,
    CategoriesComponent,
    SingleTypeComponent,
    CurrentTypesComponent,
    MaterialsComponent,
    ColorsComponent,
    CurrentColorsComponent,
    SingleColorComponent,
    CurrentMaterialsComponent,
    OrdersComponent,
    CurrentOrdersComponent,
    AnsweredOrdersComponent,
    FinishedOrdersComponent,
    CanceledOrdersComponent,
    OnTheWayOrdersComponent,
    SingleCategoryComponent,
    SingleMaterialComponent,
    NguiInViewComponent,
    TypesComponent,
    CurrentCategoriesComponent,
    ProductsComponent,
    SingleProductComponent,
    CurrentProductsComponent,
    CollectionsComponent,
    CurrentCollectionsComponent,
    SingleCollectionComponent,
    MobileNavComponent,
    TechnologyComponent,
    CurrentTechnologiesComponent,
    SingleTechnologyComponent,
    OrderByPipe,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    ScrollToModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgxCarouselModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxImageGalleryModule,
    MatMenuModule,
    NgxPaginationModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    NguiStickyModule,
    ReactiveFormsModule,
    ColorPickerModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    CartService,
    ProductTypeService,
    ProductService,
    SearchService,
    TechnologyService,
    MaterialService,
    ProductColorService,
    CategoryService,
    LocaleService,
    RestService,
    FilterResultService,
    FacebookPixelService
  ],
  entryComponents: [ WallGalleryPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
