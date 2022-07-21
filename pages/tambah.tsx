import React from 'react'
import Button from '../components/atoms/Button'
import Homepages from '../components/layouts/Homepages'

export default function TambahPages() {
  return (
    <Homepages>
      <div className="row add-pages">
        <div className="col-lg-4 images">
          <div className="add-images">
            <input
              type="file"
              className="form-control"
              name="images"
              id="inputImage"
              accept="image/png, image/jpeg"
            />
            <i className="bx bx-image-alt" />
            <Button classBtn="btn btn-add-images" />
          </div>
        </div>
        <div className="col-lg-8 data">
            <div className="card-data">
                <h2 className="title-data">Informasi Umum</h2>
            </div>
        </div>
      </div>
    </Homepages>
  )
}
