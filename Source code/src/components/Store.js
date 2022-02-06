import React                from 'react';
import col_fimg             from '../media/store/col.png';
import m_block_fimg         from '../media/store/multi_blocks.png';
import storeProducts        from '../js/storeProducts';
import nicaragua_coffee_two from '../js/nicaragua_coffee_two.png';
import peru_coffee          from '../js/peru_coffee.png';
import lion_coffee_bag      from '../js/lion_coffee_bag.png';
import '../css/Store.css';

class Store extends React.Component {

  state = {
     openSortDd      : false,
     searchVal       : '',
     storeProd       : storeProducts,
     currentPage     : 1,
     productsPerPage : 6,
     rowViewMode     : false,
     categories      : ['All','Hot drink','Cold drink','Ice drink','Dessert']
  }


componentDidMount() {
  document.querySelector('.hwnav_store').classList.add('hnava_active');
  // Scroll to top
  window.scrollTo(0,0);
  // Close hdropmobmenu if is active
  if(document.querySelector('.head_dropmobmenu').classList.contains('hdrop_open')) {
    document.querySelector('.head_dropmobmenu').classList.remove('hdrop_open');
  }
    // Highlight first pagination  nav
   let pagesLink = document.querySelectorAll('.page-link');
          pagesLink.forEach(el => { 
            if(el.innerHTML === '1') {
               el.classList.add('stpag_active');
            }
          })
    // Hightlight first category option
    let catOpt = document.querySelectorAll('.str_fil_opt');
          catOpt.forEach(el => { 
            if(el.innerHTML === 'All') {
               el.style.backgroundColor = 'rgba(180,105,51,0.3)';
            }
          })
}

componentWillUnmount() {
  // Remove highlighted nav link
   document.querySelector('.hwnav_store').classList.remove('hnava_active');
}

closeOpenSort() {
  // Close / hide sort dropdown list
  this.setState({ openSortDd: !this.state.openSortDd})
  document.querySelector('.fachdr_p').classList.toggle('fas_active');
  // Close mob filter if active
  document.querySelector('.stwrpmc_wr_filters').classList.remove('active_mobfilter')
}

filSearchHand(e) {
  let searchFilter = storeProducts.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()));
  this.setState({ storeProd:searchFilter, searchVal: e.target.value })
}


 /* Return clicked page / Highlight clicked page */
 returnPage(pageNumber,type) { 
        let currpage = 1;

        switch(type) {
          case 'prev':
            // If page number is not equal with 1, proceed to prev page
            if(this.state.currentPage !== 1) {
              currpage = this.state.currentPage - 1;
              this.setState({ loadingPage:true, currentPage: currpage })
            } else { return; }
          break;
          case 'next':
            // If page number is not equal with the last page number, proceed to next page
              let lastPageNo = pageNumber.slice(-1).pop()
              if(this.state.currentPage !== lastPageNo) {
                currpage = this.state.currentPage + 1;
                this.setState({ loadingPage:true, currentPage: currpage })
              } else { return; }
          break;
          default:
          currpage = pageNumber;
          this.setState({ loadingPage:true, currentPage: pageNumber })
        }
      
      // Disable page loading and hightlight pagination page number
      setTimeout(() => {
        this.setState({ loadingPage: false })
        // Map through all DOM pagination pages and find current page to be highlighted
        let pages = document.querySelectorAll('.page-link');
          pages.forEach(el => { 
            console.log(el.innerHTML);
            el.classList.remove('stpag_active');
            // If DOM page innerHTML number === currpage, highlight page.
            if(parseFloat(el.innerHTML) === currpage) {
              el.classList.add('stpag_active');

              // Scoll to top on every page change
             window.scrollTo({top:0,behavior:'smooth'});
               
            } else {
              el.classList.remove('stpag_active');
            }
          });
      },500);
  }

openMobFilter() {
  // Display mobile filters
  document.querySelector('.stwrpmc_wr_filters').classList.add('active_mobfilter')
  // Close sort droplist
  this.setState({ openSortDd: false })
}

selectCategory(e) {
  let catValue = e.target.innerHTML; 
  let domCatBtn = document.querySelectorAll('.str_fil_opt');

  //Highlight cat button
  for(let i=0;i<domCatBtn.length;i++) {
    domCatBtn[i].style.backgroundColor = 'transparent';
  }
  e.target.style.backgroundColor = 'rgba(180,105,51,0.3)';

  // Get node info
  this.setState({ selCat: catValue })
  // Filter chosen cat

  let filterResult;

  switch(catValue) {
    case 'Hot drink':
      filterResult = storeProducts.filter(el => el.cat === 'Hot drink');
      this.setState({ storeProd: filterResult })
    break;
    case 'Cold drink':
      filterResult = storeProducts.filter(el => el.cat === 'Cold drink');
      this.setState({ storeProd: filterResult })
    break;
    case 'Ice drink':
      filterResult = storeProducts.filter(el => el.cat === 'Ice drink');
      this.setState({ storeProd: filterResult })
    break;
    case 'Dessert':
      filterResult = storeProducts.filter(el => el.cat === 'Dessert');
      this.setState({ storeProd: filterResult })
    break;
    default:
     this.setState({ storeProd: storeProducts })  
  }

  // Close mobile filter after selecting category
  this.showMobFilterResults();
}

showMobFilterResults() {
   // Close mobile filter after selecting category
  if(document.querySelector('.stwrpmc_wr_filters').classList.contains('active_mobfilter')) {
    document.querySelector('.stwrpmc_wr_filters').classList.remove('active_mobfilter');
  }
}

selectSort(e) {
  let sortValue = e.target.innerHTML, filterSortResults;
  // Set innerhtml value with selected sort value 
  document.querySelector('.stmwrph_sdr_selval').innerHTML = e.target.innerHTML;
  // Close mob filter if active
  document.querySelector('.stwrpmc_wr_filters').classList.remove('active_mobfilter')
  // Close sort menu
  this.setState({ openSortDd: false })  

  switch(sortValue) {
    case 'A-Z':
      filterSortResults = storeProducts.sort((a,b) => a.name.length + b.name.length);
      this.setState({ storeProd: filterSortResults })
    break;
    case 'Z-A':
      filterSortResults = storeProducts.sort((a,b) => a.name.length - b.name.length);
      this.setState({ storeProd: filterSortResults })
    break;
    case 'Price':
      filterSortResults = storeProducts.sort((a,b) => a.price - b.price);
      this.setState({ storeProd: filterSortResults })
    break;
    case 'Default sorting':
      filterSortResults = storeProducts.sort((a,b) => a.id - b.id);
      this.setState({ storeProd: filterSortResults })
    break;
    default:
     return;
  }
}

strClsMobFilt() {
  document.querySelector('.head_dropmobmenu').classList.remove('hdrop_open');
}


clearFiltMobValue() {
  this.setState({searchVal: '', storeProd: storeProducts});
    let filterResult;

  switch(this.state.selCat) {
    case 'Hot drink':
      filterResult = storeProducts.filter(el => el.cat === 'Hot drink');
      this.setState({ storeProd: filterResult })
    break;
    case 'Cold drink':
      filterResult = storeProducts.filter(el => el.cat === 'Cold drink');
      this.setState({ storeProd: filterResult })
    break;
    case 'Ice drink':
      filterResult = storeProducts.filter(el => el.cat === 'Ice drink');
      this.setState({ storeProd: filterResult })
    break;
    case 'Dessert':
      filterResult = storeProducts.filter(el => el.cat === 'Dessert');
      this.setState({ storeProd: filterResult })
    break;
    default:
     this.setState({ storeProd: storeProducts })  
  }

}
  render() {

    
    const indexOfLastProduct  = this.state.currentPage * this.state.productsPerPage,
          indexOfFirstProduct = indexOfLastProduct - this.state.productsPerPage,
          products            = this.state.storeProd.slice(indexOfFirstProduct, indexOfLastProduct),
          // Divide prooducts length by the products per page state, and push resulted pageNumbers to array
          pageNumbers = [];
          for(let i=1; i <= Math.ceil(this.state.storeProd.length / this.state.productsPerPage); i++) {
          pageNumbers.push(i);
          }

        let rowViewMode = this.state.rowViewMode

    return (
        <div>
          <div className='store_main'>
             <div className='store_main_wrap'>

             {/*Head first section*/}

              <div className='st_mwrp_head'>
                <div className='st_mwrp_hhalf st_mwrp_hhalf_f'>
                  <span>Showing {products.length} of {storeProducts.length} products</span>
                </div>
                <div className='st_mwrp_hhalf st_mwrp_hhalf_s'>
                  <span><img src={col_fimg} alt='Change sort view' className='col_sview' style={{border: this.state.rowViewMode ? '1px solid rgba(180,105,51,0.3)' : ''}} onClick={() => { this.setState({ rowViewMode: true })}}/></span>
                  <span><img src={m_block_fimg} alt='Change sort view' className='block_sview' style={{border: !this.state.rowViewMode ? '1px solid rgba(180,105,51,0.3)' : ''}} onClick={() => { this.setState({ rowViewMode: false })}}/></span>
                  <span className='st_mwrp_h_sortdropdw' onClick={()=>this.closeOpenSort()}>
                    <span className='stmwrph_sdr_selval'>Default sorting</span> 
                    <i className="fas fa-chevron-down fachdr_p"></i>
                  </span>
                </div>

                {this.state.openSortDd && (
                <div className='sth_fsortdrop_drdown'>
                  <ul>
                    <li onClick={(e)=>this.selectSort(e)}>A-Z</li>
                    <li onClick={(e)=>this.selectSort(e)}>Z-A</li>
                    <li onClick={(e)=>this.selectSort(e)}>Price</li>
                    <li onClick={(e)=>this.selectSort(e)}>Default sorting</li>
                  </ul>
                </div>
                )}
              </div>

              <div className='st_wrap_prodmain_cont'>
                <div className='stwrap_pmc_wrapper'>
                  <div className={!rowViewMode ? 'stwrpmc_wr_products' : 'swwrprod_col'}>

                  <div className='stwrpc_wrpdo_mobfilterbtn' 
                       onClick={() => this.openMobFilter()}
                       style={{backgroundColor: this.state.searchVal.length > 0 || this.state.storeProd.length !== storeProducts.length ? 'rgba(180, 105, 51, 0.3)' : ''}}>
                       Filters 
                       <i className="fas fa-filter"></i>
                  </div>
                  {products.length ? (
                    products.map((el) =>
                    <React.Fragment key={el.id}>
                    <div className={!rowViewMode ? 'st_wrpprod_boxprod' : 'swrprod_boxprod_col'}>
                      <div className={!rowViewMode ? 'st_wrpprod_boxprod_wrapact' : 'swrprod_wract_col'}>
                        <div className='st_wrbxpwract_wrapper'>
                          <i className='fas fa-shopping-basket' title='Add to cart' alt='Add to cart'></i>
                          <i className='far fa-heart' title='Add to wishlist' alt='Add to wishlist'></i>
                        </div>
                      </div>
                      <div className={!rowViewMode ? 'stwrprbox_wrimgprod' : 'swrprod_wrapimg_col'}>
                        <img src={el.img} className={!rowViewMode ? 'swrprod_wrdetimg_img' : 'swrprod_wrdetimg_col'} alt='' style={{'width': el.resizedW && !this.state.rowViewMode && el.resizedW+'px','height': el.resizedH && !this.state.rowViewMode && el.resizedH+'px'}}/>
                      </div>
                      <div className={!rowViewMode ? 'stwrprbox_wrimgprod_wrdet' : 'swrprod_wrdet_col'}>
                        <span className='swrboxprod_dettxt'>{el.type}</span>
                        <span className='swrboxprod_dettxt swrboxprod_dettxt_title'>{el.name}</span>
                        <span className='swrboxprod_dettxt'>${el.price}</span>
                      </div>
                    </div>
                    </React.Fragment>
                    )):(<span className='stwrpd_noprod_errmsg'>No exact matches found</span>)}


                   <div className='stwrpprod_pagnav'>
                    <nav>
                      <ul className='pagination'>
                        <li className='page-item'>
                            <span className='page-link page_link_arrow' tabIndex='0' onClick={() => this.returnPage(pageNumbers, 'prev')}>
                              <span aria-hidden='true'>&laquo;</span>
                            </span>
                          </li>

                        {pageNumbers.map((pageNo) => (
                          <li key={pageNo} className='page-item'>
                          <span onClick={() => this.returnPage(pageNo)} tabIndex='0' href='!#' className='page-link'>
                          {pageNo}
                          </span>
                          </li>
                        ))}

                         <li className='page-item'>
                            <span className='page-link page_link_arrow' tabIndex='0' onClick={() => this.returnPage(pageNumbers,'next')}>
                              <span aria-hidden='true'>&raquo;</span>
                            </span>
                          </li>
                      </ul>
                    </nav>
                  </div>

                  </div>
                  <div className='stwrpmc_wr_filters'>
                    <div className='stwr_filt_wrsearch'>
                      <span className='strfmobwrfsearch_close' onClick={() => {document.querySelector('.stwrpmc_wr_filters').classList.remove('active_mobfilter')}}>&times;</span>
                      <span className='strwfil_title'>Search</span>
                      <span className='strwfil_searcwrapinpt'>
                        <input type='text' placeholder='Search product' value={this.state.searchVal} onChange={(e) => this.filSearchHand(e)}/>
                       {!this.state.searchVal.length ? ( 
                        <i className='fas fa-search'></i>
                       ):(
                        <span className='inpt_valon_x' onClick={()=> this.clearFiltMobValue()}>&times;</span>)
                        }
                      </span>
                      {this.state.searchVal.length > 0 && (
                        <span className='inpt_srch_viewres'  onClick={()=>this.showMobFilterResults()}>Show <span>{products.length}</span> results</span>
                      )}
                    </div>
                    <div className='stwr_filt_wrcat'>
                      <span className='strwfil_title'>Categories</span>
                      {this.state.categories.map((el,ind) =>
                      <span key={ind} className='str_fil_opt' onClick={(e)=>this.selectCategory(e)}>{el}</span>
                      )}
                    </div>
                    <div className='stwr_filt_wrtopprod'>
                      <span className='strwfil_title'>Top products</span>
                      <div className='stwrf_wrprod_topbox'>
                        <span className='stwrf_wrprod_topbox_wrimg'>
                          <img src={nicaragua_coffee_two} alt=''/>
                        </span>
                        <span className='stwrf_wrprod_topbox_wrdet'>
                          <span className='sttwr_wraprat'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                          <span className='sttwr_wrapdet_title'>American coffee</span>
                          <span className='sttwr_wrapdet_price'>
                            <span>$15.00</span>
                            <span>/</span>
                            <span>$20.00</span>
                          </span>
                        </span>
                      </div>

                      <div className='stwrf_wrprod_topbox'>
                        <span className='stwrf_wrprod_topbox_wrimg'>
                          <img src={peru_coffee} alt=''/>
                        </span>
                        <span className='stwrf_wrprod_topbox_wrdet'>
                          <span className='sttwr_wraprat'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                          <span className='sttwr_wrapdet_title'>American coffee</span>
                          <span className='sttwr_wrapdet_price'>
                            <span>$15.00</span>
                            <span>/</span>
                            <span>$20.00</span>
                          </span>
                        </span>
                      </div>

                      <div className='stwrf_wrprod_topbox'>
                        <span className='stwrf_wrprod_topbox_wrimg'>
                          <img src={lion_coffee_bag} alt=''/>
                        </span>
                        <span className='stwrf_wrprod_topbox_wrdet'>
                          <span className='sttwr_wraprat'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                          <span className='sttwr_wrapdet_title'>American coffee</span>
                          <span className='sttwr_wrapdet_price'>
                            <span>$25.00</span>
                            <span>/</span>
                            <span>$30.00</span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
             </div>
          </div>
          <span className='c_wrap_endcont_bg'></span>
        </div>
      )
  }
}



export default Store;