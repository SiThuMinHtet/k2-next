import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Chart from 'chart.js/auto';
import styles from '../styles/Dashboard.module.scss';


export default function Dashboard() {
  const chartRefs = useRef({});

  const initialData = {
    totalSales: 30000000,
    totalVisits: 334245,
    registeredUsers: 75,
    newFollowers: 245,
    dailySales: [400, 300, 200, 600, 400, 300, 300, 400, 450, 500, 600, 700],
    dailyVisits: [5, 10, 2, 10, 15, 12, 30],
    completedTasks: [100, 600, 300, 200, 150, 100, 80, 50],
    deviceUsage: [
      { name: 'PC', value: 62 },
      { name: 'Laptop', value: 23 },
      { name: 'Tablet', value: 8 },
      { name: 'Mobile', value: 7 }
    ],
    socialFollowers: {
      facebook: 245,
      instagram: 245,
      twitter: 245
    },
    browserUsage: [
      { name: 'Chrome', number: '2,920', percentage: '53.23%' },
      { name: 'Safari', number: '1,300', percentage: '20.43%' },
      { name: 'Firefox', number: '760', percentage: '10.35%' },
      { name: 'IE', number: '690', percentage: '7.87%' },
      { name: 'Edge', number: '600', percentage: '5.94%' }
    ]
  };
  
  useEffect(() => {
    const createOrUpdateChart = (id, config) => {
      if (chartRefs.current[id]) {
        chartRefs.current[id].destroy();
      }
      const ctx = document.getElementById(id).getContext('2d');
      chartRefs.current[id] = new Chart(ctx, config);
    };

    createOrUpdateChart('dailySalesChart', {
      type: 'bar',
      data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        datasets: [{
          label: 'Daily Sales',
          data: initialData.dailySales,
          backgroundColor: 'rgba(255, 159, 64, 0.8)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: { y: { beginAtZero: true } },
        plugins: { legend: { display: false } },
        responsive: true,
        maintainAspectRatio: false
      }
    });

    createOrUpdateChart('dailyVisitChart', {
      type: 'line',
      data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
          label: 'Daily Visits',
          data: initialData.dailyVisits,
          fill: true,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: { y: { beginAtZero: true } },
        plugins: { legend: { display: false } },
        responsive: true,
        maintainAspectRatio: false
      }
    });

    createOrUpdateChart('completedChart', {
      type: 'line',
      data: {
        labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
        datasets: [{
          label: 'Completed',
          data: initialData.completedTasks,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1
        }]
      },
      options: {
        scales: { y: { beginAtZero: true } },
        plugins: { legend: { display: false } },
        responsive: true,
        maintainAspectRatio: false
      }
    });

    createOrUpdateChart('deviceChart', {
      type: 'pie',
      data: {
        labels: ['PC', 'Laptop', 'Tablet', 'Mobile'],
        datasets: [{
          data: initialData.deviceUsage.map(item => item.value),
          backgroundColor: ['#00BCD4', '#f44336', '#FFC107', '#2196F3'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.label}: ${context.raw}%`;
              }
            }
          }
        }
      }
    });

    return () => {
      Object.values(chartRefs.current).forEach(chart => chart.destroy());
    };
  }, []);

  return (
    <div className={styles.dashboard}>
      <Head>
        <title>Dashboard</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

      <div className={styles.content}>
        <h1 className={styles.content__title}>ダッシュボード</h1>

        <div className={styles.statsGrid}>
          <StatCard icon="fa-regular fa-copy" color="orange" label="Sales" value={`${initialData.totalSales.toLocaleString()}円`} />
          <StatCard icon="fa-solid fa-shop" color="green" label="Visits" value={initialData.totalVisits.toLocaleString()} />
          <StatCard icon="fa-solid fa-chart-simple" color="pink" label="Registered" value={initialData.registeredUsers} />
          <StatCard icon="fa-solid fa-chart-line" color="blue" label="Followers" value={`+${initialData.newFollowers}`} />
        </div>

        <div className={styles.chartsGrid}>
          <ChartCard id="dailySalesChart" title="Daily Sales" />
          <ChartCard id="dailyVisitChart" title="Daily Visit" />
          <ChartCard id="completedChart" title="Completed / Registered" />
        </div>

        <div className={styles.socialGrid}>
          <SocialCard icon="fa-brands fa-facebook-f" color="facebook" label="Followers" value={`+${initialData.socialFollowers.facebook}`} />
          <SocialCard icon="fa-brands fa-instagram" color="instagram" label="Followers" value={`+${initialData.socialFollowers.instagram}`} />
          <SocialCard icon="fa-brands fa-twitter" color="twitter" label="Followers" value={`+${initialData.socialFollowers.twitter}`} />
        </div>

        <div className={styles.usageGrid}>
          <BrowserUsageCard browsers={initialData.browserUsage} />
          <DeviceUsageCard devices={initialData.deviceUsage} />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, color, label, value }) {
  return (
    <div className={styles.statCard}>
      <div className={`${styles.statCard__icon} ${styles[`--${color}`]}`}>
        <i className={icon}></i>
      </div>
      <div className={styles.statCard__content}>
        <div className={styles.statCard__label}>{label}</div>
        <div className={styles.statCard__value}>{value}</div>
      </div>
      <div className={styles.statCard__time}>
        <p>Just Updated</p>
      </div>
    </div>
  );
}

function ChartCard({ id, title }) {
  return (
    <div className={styles.chartCard}>
      <div className={styles.chartCard__content}>
        <canvas id={id}></canvas>
      </div>
      <h3 className={styles.chartCard__title}>{title}</h3>
    </div>
  );
}

function SocialCard({ icon, color, label, value }) {
  return (
    <div className={styles.socialCard}>
      <div className={`${styles.socialCard__icon} ${styles[`--${color}`]}`}>
        <i className={icon}></i>
      </div>
      <div className={styles.socialCard__content}>
        <div className={styles.socialCard__label}>{label}</div>
        <div className={styles.socialCard__value}>{value}</div>
      </div>
      <div className={styles.socialCard__time}>
        <p>Just Updated</p>
      </div>
    </div>
  );
}

function BrowserUsageCard({ browsers }) {
  return (
    <div className={`${styles.usageCard} ${styles.browser}`}>
      <div className={`${styles.usageCard__icon} ${styles.iconGlobe}`}>
        <i className="fas fa-globe"></i>
      </div>
      <h2>Browser Usage</h2>
      <div className={styles.usageCard__content}>
        <ul className={styles.browserList}>
          {browsers.map((browser, index) => (
            <li key={index} className={styles.browserItem}>
              <span className={styles.browserDot}></span>
              <span className={styles.browserName}>{browser.name}</span>
              <span className={styles.browserNumber}>{browser.number}</span>
              <span className={styles.browserPercentage}>{browser.percentage}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DeviceUsageCard({ devices }) {
  return (
    <div className={`${styles.usageCard} ${styles.device}`}>
      <div className={`${styles.usageCard__icon} ${styles.iconChart}`}>
        <i className="fas fa-chart-pie"></i>
      </div>
      <h2>Device Usage</h2>
      <div className={`${styles.usageCard__content} ${styles.device}`}>
        <div className={styles.deviceLegend}>
          {devices.map((device, index) => (
            <div key={index} className={styles.legendItem}>
              <span className={`${styles.colorDot} ${styles[device.name.toLowerCase()]}`}></span>
              <span>{device.name}</span>
            </div>
          ))}
        </div>
        <canvas id="deviceChart" width={20}></canvas>
      </div>
    </div>
  );
}

