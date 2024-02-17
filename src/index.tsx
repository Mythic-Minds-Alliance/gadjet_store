/* eslint-disable max-len */
import { createRoot } from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { PhonePage } from './pages/PhonePage/PhonePage';
import { HomePage } from './pages/HomePage/HomePage';
import { CartPage } from './pages/CartPage/CartPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage';

import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { TabletsPage } from './pages/TabletsPage/TabletsPage';
import { FooterRights } from './components/FooterRights';
import { FooterContacts } from './components/FooterContacts';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { Root } from './root';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="phones" element={<PhonePage />} />

        <Route path="tablets" element={<TabletsPage />} />

        <Route path="accessories" element={<AccessoriesPage />} />

        <Route path="favorites" element={<FavoritesPage />} />

        <Route path="cart" element={<CartPage />} />

        <Route path="rights" element={<FooterRights />} />

        <Route path="contacts" element={<FooterContacts />} />

        <Route path="account" element={<AccountPage />} />

        <Route path="account/register" element={<AccountPage />} />
        <Route path="account/login" element={<AccountPage />} />

        <Route path="phones/:productId" element={<ProductDetailsPage />} />
        <Route path="tablets/:productId" element={<ProductDetailsPage />} />
        <Route path="accessories/:productId" element={<ProductDetailsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>,
);
