function Items({ currentItems, itemOffset }) {
  return (
    <>
      <div className="container mb-4">
        <div className="row border fw-bold text-center">
          <div className="col-1 border">S.No</div>
          <div className="col-5 border">Title</div>
          <div className="col-2 border">Start Date</div>
          <div className="col-2 border">End Date</div>
          <div className="col-2 border">Documents</div>
        </div>
        {currentItems && currentItems.map((item, index) => {
          return (
            <div className="row">
              <div className="col-1 border d-flex justify-content-center align-items-center">
                {itemOffset + index + 1}
              </div>
              <div className="col-5 border">{item.title}</div>
              <div className="col-2 border d-flex justify-content-center align-items-center">
                {item.tender_date}
              </div>
              <div className="col-2 border d-flex justify-content-center align-items-center">
                {item.end_date}
              </div>
              <div className="col-2 border d-flex justify-content-center align-items-center">
                <a href={item.logo_hidden_images} target="_blank">
                  <i class="fa-solid fa-file-pdf"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Items;
