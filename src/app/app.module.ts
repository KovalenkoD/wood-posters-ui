import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxCarouselModule } from 'ngx-carousel';
import { NguiStickyModule } from '@ngui/sticky';
import 'hammerjs';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatExpansionModule,
  MatDialogModule
} from '@angular/material';
import { Parallax, ParallaxConfig } from 'ngx-parallax';

import { CartService } from './services/cart.service';

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
import { HomeSliderComponent } from './components/common/home-slider/home-slider.component';
import { PopularProductsComponent } from './components/common/popular-products/popular-products.component';
import { PopularCollectionsComponent } from './components/common/popular-collections/popular-collections.component';
import { InteractiveImageComponent } from './components/common/interactive-image/interactive-image.component';
import { SubscribeNewsComponent } from './components/common/subscribe-news/subscribe-news.component';
import { SearchComponent } from './components/common/search/search.component';
import { ProductSingleComponent } from './components/common/product-single/product-single.component';
import { CartComponent } from './components/common/cart/cart.component';
import { CollectionSingleComponent } from './components/common/collection-single/collection-single.component';
import { FilterPanelComponent } from './components/common/filter-panel/filter-panel.component';
import { FilterSidebarComponent } from './components/common/filter-sidebar/filter-sidebar.component';
import { FilterResultComponent } from './components/common/filter-result/filter-result.component';
import { PosterComponent } from './components/common/poster/poster.component';
import { PostersGalleryComponent } from './components/common/posters-gallery/posters-gallery.component';
import { ProductDetailsComponent } from './components/common/product-details/product-details.component';
import { SimilarProductsComponent } from './components/common/similar-products/similar-products.component';

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
  { path: 'about-us',
    component: AboutUsPageComponent
  },
  { path: 'product',
    component: ProductPageComponent
  },
  { path: 'collections',
    component: CollectionsPageComponent
  },
  { path: 'trends',
    component: TrendsPageComponent
  },
  { path: 'category',
    component: CategoryPageComponent
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
    ProductPageComponent,
    CollectionsPageComponent,
    TrendsPageComponent,
    PaymentPageComponent,
    AboutUsPageComponent,
    HomeSliderComponent,
    PopularProductsComponent,
    PopularCollectionsComponent,
    InteractiveImageComponent,
    SubscribeNewsComponent,
    SearchComponent,
    ProductSingleComponent,
    CartComponent,
    CollectionSingleComponent,
    FilterPanelComponent,
    FilterSidebarComponent,
    FilterResultComponent,
    Parallax,
    PosterComponent,
    PostersGalleryComponent,
    ProductDetailsComponent,
    SimilarProductsComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxCarouselModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    NguiStickyModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
