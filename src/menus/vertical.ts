import type { VerticalMenuItem } from '@/layouts/components/types'

export default [
  { heading: 'Menus' },
  {
    name: 'Dashboard',
    icon: 'bxs-dashboard',
    children: [
      { name: 'eCommerce', icon: 'bxs-circle', href: '#!' },
      { name: 'Analytics', icon: 'bxs-circle', to: { name: 'dashboard-analytics' } },
      { name: 'Operations', icon: 'bxs-circle', href: '#!' },
      { name: 'CRM', icon: 'bxs-circle', href: '#!' },
    ],
  },
  { heading: 'Apps' },
  {
    name: 'Products',
    icon: 'bx-cube',
    children: [
      { name: 'List', icon: 'bxs-circle', href: '#!'},
      { name: 'Overview', icon: 'bxs-circle', href: '#!' },
      { name: 'Edit', icon: 'bxs-circle', href: '#!' },
      { name: 'Add', icon: 'bxs-circle', href: '#!' },
    ],
  },
  {
    name: 'Order',
    icon: 'bx-cart',
    children: [
      { name: 'List', icon: 'bxs-circle', href: '#!' },
      { name: 'Overview', icon: 'bxs-circle', href: '#!' },
    ],
  },
  {
    name: 'Academy',
    icon: 'bx-file',
    children: [
      { name: 'Dashboard', icon: 'bxs-circle', href: '#!' },
      { name: 'Explore', icon: 'bxs-circle', href: '#!' },
      { name: 'Details', icon: 'bxs-circle', href: '#!' },
    ],
  },
  {
    name: 'Jobs',
    icon: 'bx-briefcase',
    children: [
      { name: 'List', icon: 'bxs-circle', href: '#!' },
      { name: 'Details', icon: 'bxs-circle', href: '#!' },
    ],
  },
  {
    name: 'Restaurant',
    icon: 'bx-store',
    children: [
      { name: 'Menu', icon: 'bxs-circle', href:'#!' },
      { name: 'Orders', icon: 'bxs-circle', href: '#!' },
    ],
  },
  { heading: 'Pages' },
  {
    name: 'Search',
    icon: 'bx-search',
    to: { name: 'search' },
  },
  {
    name: 'Pricing',
    icon: 'bx-dollar',
    href: '#!',
  },
  {
    name: 'FAQs',
    icon: 'bx-help-circle',
    href: '#!',
  },
  {
    name: 'Crypto',
    icon: 'bx-bitcoin',
    to: { name: 'pages-crypto' },
  },
  {
    name: 'Card Examples',
    icon: 'bx-square',
    to: { name: 'pages-cards' },
  },
  {
    name: 'Authentications',
    icon: 'bx-shield-quarter',
    children: [
      { name: 'Login', icon: 'bxs-circle', to: { name: 'login' }, target: '_blank' },
      
      { name: 'Register', icon: 'bxs-circle', href: '#!'},
      
      { name: 'Forgot Password', icon: 'bxs-circle', to: { name: 'forgot-password' }, target: '_blank' },
     
      { name: 'Reset Password', icon: 'bxs-circle', href: '#!' },
      
    ],
  },
  {
    name: 'Frontend',
    icon: 'bx-globe',
    children: [
      { name: 'Landing Page', icon: 'bxs-circle', href: '#!' },
    ],
  },
  { heading: 'UI Elements' },
  {
    name: 'Extensions',
    icon: 'bx-extension',
    children: [
      { name: 'Quill Editor', icon: 'bxs-circle', href: '#!' },
      { name: 'Tiptap Editor', icon: 'bxs-circle', href: '#!' },
      { name: 'Toastify', icon: 'bxs-circle', href: '#!' },
      { name: 'Map - Leaflet', icon: 'bxs-circle', href: '#!' },
      { name: 'Masonry Wall', icon: 'bxs-circle', href: '#!' },
      { name: 'Sortable', icon: 'bxs-circle', href: '#!' },
      { name: 'Drop Zone', icon: 'bxs-circle', href: '#!' },
      { name: 'Date Picker', icon: 'bxs-circle', href: '#!' },
      { name: 'Cleave Input', icon: 'bxs-circle', href: '#!' },
      { name: 'Swiper', icon: 'bxs-circle', href: '#!' },
    ],
  },
  { heading: 'Forms & Tables' },
  { name: 'Forms Advertising', icon: 'bx-clipboard', to: { name: 'forms-example-advertising' } },
  { name: 'Tables', icon: 'bx-grid-alt', href: '#!' },
  { name: 'Datatables', icon: 'bx-grid', href: '#!' },
  { name: 'Documentation', icon: 'bx-file', href: '#!' },
] as VerticalMenuItem[]
