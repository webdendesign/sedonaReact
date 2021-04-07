import React from 'react';

const Map = () => {
  return (
    <section className="map modal-map">
      <h2 className="visually-hidden">Как добраться до Седоны.</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d785920.059432777!2d-112.18285995686945!3d34.80288204569004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0LjQt9C-0L3QsCA4NjMzNiwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1522259529726" width="1200" height="593" allowFullScreen></iframe>
      <img src="img/map.jpg" width="1200" height="593" alt="Как добраться до Седоны" />
    </section>
  );
};

export default Map;
