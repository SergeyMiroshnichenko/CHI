import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const CarTable = ({
    cars,
    setCars,
    currentPage,
    setTotalPages,
    carsPerPage,
    setDisplayedCars,
    setCurrentPage,
    handleActionChange,
    handleDelete,
    closeModal,
    isModalOpen,
    setIsModalOpen,
    setSelectedCarIndex,
  }) => {
    const [selectedActions, setSelectedActions] = useState(Array(cars.length).fill(''));
  
    useEffect(() => {
      setSelectedActions(Array(cars.length).fill(''));
    }, [cars]);
  
    const confirmDelete = () => {
      const updatedCars = [...cars];
      updatedCars.splice(handleDelete, 1);
      setCars(updatedCars);
  
      setIsModalOpen(false);
      setSelectedCarIndex(null);
  
      const startIndex = (currentPage - 1) * carsPerPage;
      const endIndex = startIndex + carsPerPage;
      const updatedDisplayedCars = updatedCars.slice(startIndex, endIndex);
      setDisplayedCars(updatedDisplayedCars);
  
      const updatedTotalPages = Math.ceil(updatedCars.length / carsPerPage);
      setTotalPages(updatedTotalPages);
  
      if (currentPage > updatedTotalPages) {
        setCurrentPage(updatedTotalPages);
      }
    };
  
    return (
      <div className='wrapper_CarTable'>
        <table id="carTable">
          <thead>
            <tr className="title_tr">
              <th>Компания</th>
              <th>Модель</th>
              <th>ВИН</th>
              <th>Цвет</th>
              <th>Год</th>
              <th>Цена</th>
              <th>Доступность</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={car.vin}>
                <td>{car.car}</td>
                <td>{car.car_model}</td>
                <td>{car.car_vin}</td>
                <td>{car.car_color}</td>
                <td>{car.car_model_year}</td>
                <td>{car.price}</td>
                <td>{car.availability ? 'Доступно' : 'Недоступно'}</td>
                <td>
                  <div className="action-accordion">
                    <select
                      value={selectedActions[index]}
                      onChange={(event) => handleActionChange(index, event.target.value)}
                    >
                      <option value="">Выберите действие</option>
                      <option value="edit">Редактировать</option>
                      <option value="delete">Удалить</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal isOpen={isModalOpen}>
          <div>
            Вы действительно хотите удалить автомобиль?
            <button onClick={confirmDelete}>Да</button>
            <button onClick={closeModal}>Нет</button>
          </div>
        </Modal>
      </div>
    );
  };
  
  export default CarTable;


