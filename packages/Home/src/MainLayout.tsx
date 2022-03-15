import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import HomeContent from "home/HomeContent";
import { EpisodesProvider } from "home/store";
import { LikeCartProvider } from "like_cart/store";

import EpisodeContent from "content/EpisodeContent";
import CartContent from "like_cart/CartContent";

export default function MainLayout() {
  return (
    <EpisodesProvider>
      <BrowserRouter>
        <LikeCartProvider>
          <div className="text-3xl mx-auto max-w-6xl">
            <Header />
            <main className="my-10">
              <Routes>
                <Route path="*" element={<HomeContent />} />
                <Route path="episode/:id" element={<EpisodeContent />} />
                <Route path="/favPodcasts" element={<CartContent />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </LikeCartProvider>
      </BrowserRouter>
    </EpisodesProvider>
  );
}
