import { useState } from "react";
import { Page } from "@/data";
import AppLayout from "@/components/AppLayout";
import HomePage from "@/components/pages/HomePage";
import CatalogPage from "@/components/pages/CatalogPage";
import StreamPage from "@/components/pages/StreamPage";
import GiftsPage from "@/components/pages/GiftsPage";
import CommunityPage from "@/components/pages/CommunityPage";
import ProfilePage from "@/components/pages/ProfilePage";

export default function Index() {
  const [page, setPage] = useState<Page>("home");

  return (
    <AppLayout page={page} setPage={setPage}>
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "catalog" && <CatalogPage />}
      {page === "stream" && <StreamPage />}
      {page === "gifts" && <GiftsPage />}
      {page === "community" && <CommunityPage />}
      {page === "profile" && <ProfilePage />}
    </AppLayout>
  );
}
