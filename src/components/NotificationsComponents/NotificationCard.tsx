/** @format */
import React from "react";
import { Calendar, UserCog, FileText, CheckSquare } from "lucide-react";
import { Notification } from "@/types/AllTypes";
import { cn } from "@/lib/utils";

interface NotificationCardProps {
  notification: Notification;
}

const NotificationCard = ({ notification }: NotificationCardProps) => {
  const getIconAndColor = (type: string) => {
    switch (type) {
      case "schedule":
        return {
          icon: Calendar,
          bgColor: "bg-cyan-100",
          iconColor: "text-cyan-600",
        };
      case "admin":
        return {
          icon: UserCog,
          bgColor: "bg-blue-100",
          iconColor: "text-blue-600",
        };
      case "report":
        return {
          icon: FileText,
          bgColor: "bg-purple-100",
          iconColor: "text-purple-600",
        };
      case "checklist":
        return {
          icon: CheckSquare,
          bgColor: "bg-purple-100",
          iconColor: "text-purple-600",
        };
      default:
        return {
          icon: FileText,
          bgColor: "bg-gray-100",
          iconColor: "text-gray-600",
        };
    }
  };

  const { icon: Icon, bgColor, iconColor } = getIconAndColor(notification.type);

  return (
    <div className="bg-white rounded-xl p-4 flex items-start gap-4 hover:shadow-md transition-shadow">
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
          bgColor
        )}
      >
        <Icon className={cn("w-6 h-6", iconColor)} />
      </div>
      <div className="flex-1">
        <p className="text-gray-800 text-base font-normal leading-relaxed">
          {notification.title}
        </p>
        <p className="text-gray-500 text-sm mt-1">{notification.time}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
