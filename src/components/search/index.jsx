import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBounds, changeCoords } from '../../redux/reducers/maps-slice';
import ymaps from 'ymaps';
import styles from './styles.module.css';

export const Search = () => {

  const [value, setValue] = useState('');
  const [bound, setBound] = useState('');
  const dispatch = useDispatch();
  const center = useSelector(state => state.mapsState.coordinates);
  const bounds = useSelector(state => state.mapsState.boundedBy);

  const mapRef = useRef(null);

  const handleCoordsChange = (event) => {
    setValue(event.target.value);
    if (+event.target.value[0]) {
      let coords = value.split(', ');
      setTimeout(() => {
        dispatch(changeCoords(coords))
      }, 2000);
    } else if (event.target.value === '') {
      setTimeout(() => {
        dispatch(changeCoords([55.78948, 49.15655]));
      }, 2000);
    } else {
      setTimeout(() => {
        dispatch(changeCoords(value))
      }, 2000);
    }
  }

  const handleBoundsChange = (event) => {
    setBound(event.target.value);
    dispatch(changeBounds(value));
  };

  useEffect(() => {
    let map;
    if (Array.isArray(center)) {
      ymaps.load().then((ymaps) => {
        map = new ymaps.Map(mapRef.current, {
          center: center,
          zoom: 10,
          controls: [],
        }, { suppressMapOpenBlock: true });
        let placemark = new ymaps.Placemark(center, {}, {
          iconLayout: 'default#image',
          iconImageSize: [40, 40],
          iconImageOffset: [-5, -45],
        });
        map.geoObjects.add(placemark);
      })
    } else {
      ymaps.geocode(center, {
        results: 1,
        boundedBy: bounds,
      }).then((res) => {
        let firstGeoObject = res.geoObjects.get(0);
        let coords = firstGeoObject.geometry.getCoordinates();
        dispatch(changeCoords(coords));
      })
    }

    return () => {
      if (map) {
        map.destroy()
      }
    }
  }, [center])

  return (
    <div className={styles.search}>
      <span className={styles['search__title']}>Где вы находитесь или будете принимать волонтёров</span>
      <form action='' method='post' className={styles['search-form']}>
        <label className={styles['search-form__label']}>Адрес</label>
        <input type='text' name='coords' value={value} onChange={handleCoordsChange}
          className={styles['search-form__input']} />
        <div className={styles.after}></div>
        <label className={styles['search-form__label']}>Ближайший к месту город</label>
        <input type='text' name='bounds' value={bound} onChange={handleBoundsChange}
          className={styles['search-form__input']} />
        <div className={styles.after}></div>
        <div ref={mapRef} id="map-id" className={styles.ymaps} />
        <input type='button' value='Дальше' className={styles['search-form__button']} />
      </form>
    </div>
  )
}

export default Search;