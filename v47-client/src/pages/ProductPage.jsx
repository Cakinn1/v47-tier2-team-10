import React, { useContext, useEffect, useState } from "react";
import LeftNav from "../components/productpage/LeftNav/LeftNav";
import data from "../data.json";
import { fetchData } from "../lib/apiServices";
import app from "../firebase";
import Header from "../components/productpage/header/Header";
import Main from "../components/productpage/main/Main";
import { productDataContext } from "../context/ProductDataContext";
import { isLoadingContext } from "../context/IsLoadingContext";

export default function ProductPage() {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const { setProductData } = useContext(productDataContext);
  const { setIsLoading } = useContext(isLoadingContext);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const result = await fetchData(data);
        setProductData(result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error Fetching data", error);
      }
    };
    fetchProductData();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-slate-900 ">
      {isLeftNavOpen && (
        <div
          className="absolute bg-black opacity-50 inset-0 lg:position:static lg:bg-white lg:opacity-0 lg:inset-auto z-10 lg:z-auto"
          onClick={() => setIsLeftNavOpen(false)}
        ></div>
      )}
      <Header
        isLeftNavOpen={isLeftNavOpen}
        setIsLeftNavOpen={setIsLeftNavOpen}
      />
      <LeftNav
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        isLeftNavOpen={isLeftNavOpen}
        setIsLeftNavOpen={setIsLeftNavOpen}
      />

      <div
        style={{ minHeight: "calc(100vh - 77px)" }}
        className="w-full   px-4 sm:px-6 md:px-8 md:ml-5  py-10 lg:ps-72"
      >
        {/*
        - move this to the nav
              
              <UserSignedIn
              showLoginModal={showLoginModal}
              setShowLoginModal={setShowLoginModal}
            />
         */}
        <Main
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
        />
      </div>
    </div>
  );
}
