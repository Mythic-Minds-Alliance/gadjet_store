import { createRoot } from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { PhonePage } from './pages/PhonePage/PhonePage';
import { HomePage } from './pages/HomePage/HomePage';
import { CartPage } from './pages/CartPage/CartPage';
// eslint-disable-next-line max-len
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage';
import { TabletsPage } from './pages/TabletsPage/TabtetsPage';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="phones" element={<PhonePage />} />

        <Route path="tablets" element={<TabletsPage />} />

        <Route path="accessories" element={<AccessoriesPage />} />

        <Route path="favorites" element={<FavoritesPage />} />

        <Route path="cart" element={<CartPage />} />

        <Route path="productDetails" element={<ProductDetailsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>,
);
