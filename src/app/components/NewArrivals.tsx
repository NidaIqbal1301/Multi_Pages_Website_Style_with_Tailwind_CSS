import React from 'react'
import Image from 'next/image'

const NewArrivals = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section_category">
            <p className="section_category_p">Featured</p>
          </div>
          <div className="section_header">
            <h3 className="section_title">New Arrivals</h3>
          </div>
          <div className="gallery">
            <div className="gallery_item gallery_item_1">
              <Image
                src="/images/gallery/gallery-1.png"
                alt="gallery 1"
                width={570}
                height={600}
                className="gallery_item_img"
              />
              <div className="gallery_item_content">
                <div className="gallery_item_title">Playstation 5</div>
                <p className="gallery_item_p">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <a href="#" className="gallery_item_link">
                  SHOP NOW
                </a>
              </div>
            </div>
            <div className="gallery_item gallery_item_2">
              <Image
                src="/images/gallery/gallery-2.png"
                alt="gallery 2"
                width={570}
                height={284}
                className="gallery_item_img"
              />
              <div className="gallery_item_content">
                <div className="gallery_item_title">Playstation 5</div>
                <p className="gallery_item_p">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <a href="#" className="gallery_item_link">
                  SHOP NOW
                </a>
              </div>
            </div>
            <div className="gallery_item gallery_item_3">
              <Image
                src="/images/gallery/gallery-3.png"
                alt="gallery 3"
                width={270}
                height={284}
                className="gallery_item_img"
              />
              <div className="gallery_item_content">
                <div className="gallery_item_title">Playstation 5</div>
                <p className="gallery_item_p">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <a href="#" className="gallery_item_link">
                  SHOP NOW
                </a>
              </div>
            </div>
            <div className="gallery_item gallery_item_4">
              <Image
                src="/images/gallery/gallery-4.png"
                alt="gallery 4"
                width={210}
                height={222}
                className="gallery_item_img"
              />
              <div className="gallery_item_content">
                <div className="gallery_item_title">Playstation 5</div>
                <p className="gallery_item_p">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <a href="#" className="gallery_item_link">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container services_container">
          <div className="service">
            <Image
              src="/images/icons/service-1.png"
              alt="service 1"
              width={40}
              height={40}
              className="service_img"
            />
            <h3 className="service_title">FAST AND FREE DELIVERY</h3>
            <p className="service_p">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="service">
            <Image
              src="/images/icons/service-2.png"
              alt="service 2"
              width={40}
              height={40}
              className="service_img"
            />
            <h3 className="service_title">24/7 SUPPORT</h3>
            <p className="service_p">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="service">
            <Image
              src="/images/icons/service-3.png"
              alt="service 3"
              width={40}
              height={40}
              className="service_img"
            />
            <h3 className="service_title">MONEY BACK GUARANTY</h3>
            <p className="service_p">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewArrivals
