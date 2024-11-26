"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  TrendingUp,
  DollarSign,
  Calendar,
  ChevronUp,
  Bell,
  Settings,
  Building2,
  Edit,
  ExternalLink,
  Hash,
  Mail,
  Users,
  Network,
  Globe,
  Activity,
  Signal,
  Trophy,
} from "lucide-react"; // Ensure these icons are valid
import DashboardLayout from "@/app/modules/customer/pages/dash_layout/page";
import axiosInstance from "@/app/modules/admin/utils/axiosinstance";
import {jwtDecode} from "jwt-decode"; // Ensure correct import

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [Data, setData] = useState([]); // Rename `Data` or `data` for clarity
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const decoded = jwtDecode(token);
          const customerId = decoded.id;
          const response = await axiosInstance.get(
            `v3/api/customers/${customerId}`
          );
          setProfileData(response.data);
        }
      } catch (error) {
        console.error("Error fetching profile data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, []);

  const company = {
    id: profileData?.customerId || "NA",
    name: profileData?.companyName || "NA",
    email: profileData?.companyEmail || "NA",
    country: profileData?.country || "NA",
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen w-full">
        <div className="flex flex-col bg-white items-center space-y-8 px-4 py-4 mx-auto" style={{ width: "80em" }}>
          <div style={{ maxWidth: "100%", width: "100%" }}>
            <div className="flex bg-gray-200 rounded-lg shadow-lg p-6 gap-6">
              <div className="w-1/3 flex flex-col justify-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome back to our dashboard 👋
                </h1>
                <p className="text-gray-500">Stay updated with our latest updates</p>
              </div>
              <div className="w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company Details */}
                <div>{company.id}</div>
                <div>{company.email}</div>
                <div>{company.name}</div>
                <div>{company.country}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
