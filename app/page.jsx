"use client"

import Image from 'next/image';
import { motion, useScroll,  useTransform } from 'framer-motion';
import React, { useState, useRef } from 'react';
import Hero from '@components/home/Hero.jsx'
import YellowCollection from '@components/home/YellowCollection.jsx';
import LatestReleases from '@components/home/LatestReleases';

const Home = () => {
  return (
  <div>
    <section>
      <Hero></Hero>
    </section>

    <section>
      <YellowCollection></YellowCollection>
    </section>

    <section>
      <LatestReleases></LatestReleases>
    </section>
  </div>
  );
}

export default Home
