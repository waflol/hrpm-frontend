import React from 'react'
import { ContextProvider } from './Admin/contexts/ContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Admin/Admin';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './Admin/pages';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <div>
            {/* dashboard  */}
            <Route path="/" element={(<Ecommerce />)} />
            <Route path="/ecommerce" element={(<Ecommerce />)} />

            {/* pages  */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />

            {/* apps  */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />

            {/* charts  */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
          </div>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App