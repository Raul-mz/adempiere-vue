// ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
// Copyright (C) 2017-Present E.R.P. Consultores y Asociados, C.A.
// Contributor(s): Elsio Sanchez esanchez@erpya.com www.erpya.com
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Product Price Mutations
 */
import Vue from 'vue'

export default {
  setListProductPrice(state, productsPrices) {
    state.productPrice = {
      ...state.productPrice,
      ...productsPrices
    }
  },
  setProductPicePageNumber(state, pageNumber) {
    state.productPrice.pageNumber = pageNumber
  },
  showListProductPrice(state, payload) {
    Vue.set(state.productPrice, payload.attribute, payload.isShowed)
  },
  setIsReloadProductPrice(state) {
    Vue.set(state.productPrice, 'isReload', true)
    Vue.set(state.productPrice, 'isLoaded', false)
  },
  updtaeSearchProduct(state, searchProduct) {
    state.searchProduct = searchProduct
  }
}
