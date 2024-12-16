import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <main style={{ flex: 1, padding: "2rem" }}>
        <h1>Welcome to the Dashboard</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
}
