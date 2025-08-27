/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  Bell,
  ChevronDown,
  Globe2,
  MapPin,
  Moon,
  Search,
  Sun,
  Filter as FilterIcon,
  CheckCircle2,
  ShieldQuestion,
  HeartPulse,
  Plus,
  XCircle,
  Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import NigeriaMap from "./NigeriaMap";

export default function DashboardPage() {
  const navigate = useNavigate();

  const [selectedState, setSelectedState] = useState(null);
  const [stateData, setStateData] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // API call function
  const fetchStateData = async (stateName) => {
    setLoading(true);
    setApiError(null);

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tweet: `who reports new cases of lassa fever as death toll rises in ${stateName.toLowerCase()}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setStateData((prev) => ({
        ...prev,
        [stateName]: data,
      }));
    } catch (error) {
      console.error("API Error:", error);
      setApiError(`Failed to fetch data for ${stateName}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  //handle state click
  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
    if (!stateData[stateName]) {
      fetchStateData(stateName);
    }
  };

  // Theme state (persist + toggle <html>.dark)
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Profile menu
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [menuOpen]);

  // Supabase sign out (unchanged)
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/signin");
  };

  // Mock list
  // const reportItems = useMemo(
  //   () => [
  //     {
  //       sourceIcon: "📰",
  //       source: "Punch News",
  //       text: "Two suspected cases reported in Lafia, Nasarawa State. Blood samples sent for testing.",
  //       date: "Aug 4 2024",
  //     },
  //     {
  //       sourceIcon: "𝕏",
  //       source: "X",
  //       text: "In Irrua, Edo State, a woman tested positive for Lassa fever. Contact tracing has begun in Uromi.",
  //       date: "Aug 4 2024",
  //     },
  //     {
  //       sourceIcon: "🟢",
  //       source: "NCDC",
  //       text: "In Asaba, Delta State, 15 suspected fever cases reported. 3 referred to FMC Asaba.",
  //       date: "Aug 4 2024",
  //     },
  //     {
  //       sourceIcon: "📘",
  //       source: "Facebook",
  //       text: "A confirmed case reported at AE-FUTHA in Abakaliki. Patient is in isolation.",
  //       date: "Aug 4 2024",
  //     },
  //   ],
  //   []
  // );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-900/90">
        <div className="w-full px-3 py-2 sm:px-4">
          <div className="flex items-center justify-between gap-2">
            {/* Left: logo + search */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex items-center gap-2 shrink-0">
                <img
                  src="/lassa-icon.png"
                  alt="Lassa Lens"
                  className="w-6 h-6"
                />
                <span className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  <a href="/">LassaLens</a>
                </span>
              </div>
              <div className="relative hidden min-w-[180px] max-w-[300px] flex-1 sm:block">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-2.5 -translate-y-1/2 text-gray-400" />
                <input
                  placeholder="Search anything"
                  className="w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
            </div>

            {/* Middle tabs (desktop) — force light bg to be transparent */}
            <nav className="hidden md:flex flex-nowrap items-center gap-5 whitespace-nowrap text-sm">
              {["Scan Status", "Report"].map((item) => (
                <button
                  key={item}
                  className=" text-black hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-1">
              {/* Icons-only theme toggle */}
              <div className="flex items-center gap-1 rounded-full border border-gray-300 bg-transparent p-1 dark:border-gray-700 ">
                <button
                  title="Light"
                  aria-label="Light"
                  onClick={() => {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("theme", "light");
                    setDark(false);
                  }}
                  className={`rounded-full p-1.5 transition ${
                    !dark
                      ? "bg-white text-emerald-600 shadow-sm dark:bg-gray-900 dark:text-emerald-400"
                      : "bg-transparent text-gray-600 hover:text-gray-800 dark:text-gray-300"
                  }`}
                >
                  <Sun className="h-4 w-4" />
                </button>
                <button
                  title="Dark"
                  aria-label="Dark"
                  onClick={() => {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("theme", "dark");
                    setDark(true);
                  }}
                  className={`rounded-full p-1.5 transition ${
                    dark
                      ? "bg-dark text-emerald-600 shadow-sm dark:bg-black dark:text-emerald-400"
                      : "bg-transparent text-gray-600 hover:text-gray-800 dark:text-gray-300"
                  }`}
                >
                  <Moon className="h-4 w-4" />
                </button>
              </div>

              <button
                className="relative rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                title="Notifications"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-gray-900" />
              </button>

              {/* Avatar dropdown (includes mobile nav + Sign Out) */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen((s) => !s)}
                  className="flex items-center gap-2 rounded-full bg-transparent  p-1"
                >
                  <img
                    src="/profile-img.png"
                    alt="user"
                    className="h-7 w-7 rounded-full"
                  />
                  <ChevronDown className="hidden h-4 w-4 text-gray-500 sm:block" />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 z-40 mt-2 w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
                    {/* Mobile-only nav inside dropdown */}
                    <div className="md:hidden">
                      <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Navigation
                      </div>
                      {["Scan Status", "Report"].map((item) => (
                        <button
                          key={item}
                          className="block w-full bg-transparent px-4 py-2 text-left text-sm text-black hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                        >
                          {item}
                        </button>
                      ))}
                      <div className="my-1 h-px bg-gray-200 dark:bg-gray-800" />
                    </div>

                    <button className="block w-full bg-transparent px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">
                      Profile
                    </button>
                    <button className="block w-full bg-transparent px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">
                      Settings
                    </button>
                    <div className="my-1 h-px bg-gray-200 dark:bg-gray-800" />
                    <button
                      onClick={handleSignOut}
                      className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile search */}
          <div className="mt-2 block sm:hidden">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                placeholder="Search anything"
                className="w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
          </div>
        </div>
      </header>

      {/* PAGE */}
      <main className="mx-auto max-w-[1200px] gap-5 px-3 py-5 lg:grid lg:grid-cols-3">
        {/* LEFT: stats + map - Make it scrollable */}
        <section className="lg:col-span-2 lg:sticky lg:top-5 lg:h-screen lg:overflow-y-auto lg:pr-4">
          <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "New Cases", value: "340" },
              { label: "Total Cases", value: "5,700" },
              { label: "Incidence Rate", value: "7.6/100" },
              { label: "Reported Deaths", value: "940" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-emerald-200 bg-white p-4 shadow-sm dark:border-emerald-800/40 dark:bg-gray-900"
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="absolute inset-x-4 top-3 flex items-center justify-between">
              <span className="h-1.5 w-6 rounded bg-emerald-500" />
              <span className="h-1.5 w-6 rounded bg-emerald-500" />
            </div>

            <div className="h-[450px] pt-1">
              {loading && (
                <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 flex items-center justify-center z-10">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Analyzing {selectedState}...</span>
                  </div>
                </div>
              )}

              <NigeriaMap
                onStateClick={handleStateClick}
                selectedState={selectedState}
                stateData={stateData}
              />

              {apiError && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {apiError}
                </div>
              )}

              {/* {selectedState && stateData[selectedState] && (
                <div className="mt-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
                  <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
                    {selectedState} Analysis Results
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">
                        Relevance:
                      </span>
                      <span
                        className={`ml-2 font-medium ${
                          stateData[selectedState].is_relevant
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {stateData[selectedState].is_relevant
                          ? "Relevant"
                          : "Not Relevant"}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">
                        Confidence:
                      </span>
                      <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">
                        {(stateData[selectedState].score * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">
                        Lassa Related:
                      </span>
                      <span
                        className={`ml-2 font-medium ${
                          stateData[selectedState].label === "1"
                            ? "text-red-600 dark:text-red-400"
                            : "text-green-600 dark:text-green-400"
                        }`}
                      >
                        {stateData[selectedState].label === "1" ? "Yes" : "No"}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">
                        Location:
                      </span>
                      <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">
                        {stateData[selectedState].location}
                      </span>
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </section>

        {/* RIGHT: report + filter */}
        <aside className="mt-6 space-y-6 lg:mt-0">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {selectedState ? `${selectedState} Report` : "Report"}
              </h3>
              <button className="rounded-md bg-none border border-gray-300  px-2 py-1 text-xs text-gray-600  dark:border-gray-700 dark:text-gray-300 ">
                Today
              </button>
            </div>

            {selectedState ? (
              <>
                <div className="space-y-2 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      AI
                    </span>
                    LassaLens AI — Analyzing {selectedState} data sources
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="h-full w-3/4 rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <div className="text-red-600 dark:text-red-400 font-semibold">
                        Active Cases
                      </div>
                      <div className="text-2xl font-bold text-red-700 dark:text-red-300">
                        {selectedState === "Lagos"
                          ? "45"
                          : selectedState === "Kano"
                          ? "23"
                          : selectedState === "Rivers"
                          ? "18"
                          : Math.floor(Math.random() * 50) + 5}
                      </div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <div className="text-orange-600 dark:text-orange-400 font-semibold">
                        Suspected
                      </div>
                      <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                        {selectedState === "Lagos"
                          ? "12"
                          : selectedState === "Kano"
                          ? "8"
                          : selectedState === "Rivers"
                          ? "6"
                          : Math.floor(Math.random() * 20) + 2}
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <div className="text-green-600 dark:text-green-400 font-semibold">
                        Recovered
                      </div>
                      <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                        {selectedState === "Lagos"
                          ? "38"
                          : selectedState === "Kano"
                          ? "19"
                          : selectedState === "Rivers"
                          ? "15"
                          : Math.floor(Math.random() * 40) + 10}
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <div className="text-gray-600 dark:text-gray-400 font-semibold">
                        Deaths
                      </div>
                      <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                        {selectedState === "Lagos"
                          ? "3"
                          : selectedState === "Kano"
                          ? "2"
                          : selectedState === "Rivers"
                          ? "1"
                          : Math.floor(Math.random() * 5)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 pb-1 pt-2">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {selectedState === "Lagos"
                      ? "15"
                      : selectedState === "Kano"
                      ? "8"
                      : selectedState === "Rivers"
                      ? "12"
                      : Math.floor(Math.random() * 20) + 5}{" "}
                    Recent Reports
                  </div>
                  <button className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-400">
                    See All
                  </button>
                </div>

                <ul className="divide-y divide-gray-200 dark:divide-gray-800">
                  {[
                    {
                      source: "NCDC",
                      sourceIcon: "🏥",
                      text: `New Lassa fever case confirmed in ${selectedState} - Patient isolated and contact tracing initiated`,
                      date: "2 hours ago",
                      severity: "high",
                    },
                    {
                      source: "Local Hospital",
                      sourceIcon: "🩺",
                      text: `${selectedState} General Hospital reports suspected case under investigation`,
                      date: "4 hours ago",
                      severity: "moderate",
                    },
                    {
                      source: "WHO Nigeria",
                      sourceIcon: "🌍",
                      text: `WHO team deployed to ${selectedState} for outbreak response support`,
                      date: "6 hours ago",
                      severity: "low",
                    },
                    {
                      source: "State Ministry",
                      sourceIcon: "🏛️",
                      text: `${selectedState} State activates emergency response protocol for Lassa fever`,
                      date: "8 hours ago",
                      severity: "high",
                    },
                  ].map((r, i) => (
                    <li key={i} className="px-4 py-3">
                      <div className="mb-1 flex items-center gap-2 text-xs text-gray-500">
                        <span className="rounded bg-gray-100 px-1.5 py-0.5 dark:bg-gray-800">
                          {r.sourceIcon}
                        </span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {r.source}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            r.severity === "high"
                              ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                              : r.severity === "moderate"
                              ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                              : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                          }`}
                        >
                          {r.severity}
                        </span>
                      </div>
                      <div className="text-sm text-gray-800 dark:text-gray-200">
                        {r.text}
                      </div>
                      <div className="mt-1 text-xs text-gray-400">{r.date}</div>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <div className="space-y-2 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      AI
                    </span>
                    LassaLens AI — Scanning 40 Sources for report
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="h-full w-1/2 rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 pb-1 pt-2">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    20 Report Found
                  </div>
                  <button className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-400">
                    See All
                  </button>
                </div>

                <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                  <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">
                    Click on a state in the map to view detailed reports
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Filter */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800">
              <h3 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
                <FilterIcon className="h-4 w-4" />
                Filter {selectedState && `- ${selectedState}`}
              </h3>
            </div>

            <div className="space-y-5 p-4">
              <div className="grid grid-cols-3 gap-2">
                <SegmentButton active icon={<Plus className="h-4 w-4" />}>
                  All
                </SegmentButton>
                <SegmentButton icon={<CheckCircle2 className="h-4 w-4" />}>
                  Confirmed
                </SegmentButton>
                <SegmentButton icon={<ShieldQuestion className="h-4 w-4" />}>
                  Suspected
                </SegmentButton>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <Pill icon={<HeartPulse className="h-4 w-4" />}>
                  Prevalence
                </Pill>
                <Pill icon={<XCircle className="h-4 w-4" />}>Death</Pill>
                <Pill icon={<Plus className="h-4 w-4" />}>Recovery</Pill>
              </div>

              <section>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Source
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "All Source",
                    "Twitter",
                    "Hospital Page",
                    "Facebook",
                    "NCDC",
                    "News Outlet",
                    "Other",
                    "WHO",
                  ].map((s) => (
                    <label
                      key={s}
                      className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 dark:border-gray-700"
                        defaultChecked={s === "All Source"}
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {s}
                      </span>
                    </label>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Location
                </h4>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    placeholder={
                      selectedState
                        ? `${selectedState} - Enter LGA, City`
                        : "Enter State, City, LGA"
                    }
                    value={selectedState || ""}
                    className="w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  />
                </div>
              </section>

              <section>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Severity
                </h4>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {["High", "Moderate", "Low", "Unknown"].map((s) => (
                    <label
                      key={s}
                      className="flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
                    >
                      <input
                        type="radio"
                        name="severity"
                        defaultChecked={s === "High"}
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </section>

              <button className="mt-1 w-full rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
                Apply Filter
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

/* helpers */
function SegmentButton({ children, icon, active }) {
  return (
    <button
      className={`flex items-center justify-center gap-1 rounded-lg border px-3 py-2 text-sm transition ${
        active
          ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-700  dark:text-emerald-300"
          : "border-gray-200  text-black hover:bg-gray-50 dark:border-gray-800  dark:text-gray-300 "
      }`}
    >
      {icon}
      {children}
    </button>
  );
}
function Pill({ children, icon }) {
  return (
    <button className="flex items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
      {icon}
      {children}
    </button>
  );
}
