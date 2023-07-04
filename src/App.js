import React, { useEffect, useState } from 'react';
import { getCars } from './API/axiosConfig';
import { useDispatch } from 'react-redux';
import { getCarsAction } from './redux/actions/carsActions';
import Pagination from './Pagination';
import CarTable from './CarTable';
import AddCarButton from './AddCarButton';
import Modal from 'react-modal';
import Footer from "./Footer"
import Header from './Header';


Modal.setAppElement('#root');


const App = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedCars, setDisplayedCars] = useState([]);
  const carsPerPage = 10;
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCarIndex, setSelectedCarIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carsListResponse = await getCars();
        setCars(carsListResponse.cars);
        dispatch(getCarsAction(carsListResponse.cars));
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      }
      console.log(cars);
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    const displayedCars = cars.slice(startIndex, endIndex);
    setDisplayedCars(displayedCars);

    const updatedTotalPages = Math.ceil(cars.length / carsPerPage);
    setTotalPages(updatedTotalPages);
  }, [cars, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleActionChange = (index, action) => {
    if (action === 'delete') {
      handleDelete(index);
    }
  };

  const handleDelete = (index) => {
    setIsModalOpen(true);
    setSelectedCarIndex(index);
  };

  const confirmDelete = () => {
    const updatedCars = [...cars];
    updatedCars.splice(selectedCarIndex, 1);

    setIsModalOpen(false);
    setSelectedCarIndex(null);

    const updatedTotalPages = Math.ceil(updatedCars.length / carsPerPage);
    setTotalPages(updatedTotalPages);

    if (currentPage > updatedTotalPages) {
      setCurrentPage(updatedTotalPages);
    }

    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    const updatedDisplayedCars = updatedCars.slice(startIndex, endIndex);
    setDisplayedCars(updatedDisplayedCars);

    setCars(updatedCars);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCarIndex(null);
  };

  return (
    <div className="main">
      <Header/>
      <div className="main_container">
        <h1>Список автомобилей</h1>
        <CarTable
          cars={displayedCars}
          setCars={setCars}
          currentPage={currentPage}
          carsPerPage={carsPerPage}
          setDisplayedCars={setDisplayedCars}
          setCurrentPage={setCurrentPage}
          handleActionChange={handleActionChange} handleDelete={handleDelete}
          setTotalPages={setTotalPages}
          closeModal={closeModal}
        />
        <AddCarButton cars={cars} />
        <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
      <Footer/>
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <div>
            Вы действительно хотите удалить автомобиль?
            <button onClick={confirmDelete}>Да</button>
            <button onClick={closeModal}>Нет</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
