import React from 'react';
import Avatar from '@mui/material/Avatar';


export interface User {
  id: number; // Assuming each user has a unique id
  name: string;
  email: string;
  avatarUrl: string;
}

interface AvatarBarProps {
  users: User[];
}

function AvatarBar({ users }: AvatarBarProps) {
  return (
    <div className="flex cursor-pointer">
      {users.map((user) => (
        <div key={user.id} className="flex gap-3 pr-7">
          <Avatar
            alt={user.name}
            src={user.avatarUrl}
            sx={{ width: 36, height: 36 }}
            className="rounded-full"
          >
            {user.name.charAt(0)}
          </Avatar>
          <div className="ml-2">
                        <span
                          className="block  font-semibold text-[15px] leading-[1.6] text-[#111827]">{user.name}</span>
            <span
              className="block font-light text-[14px] leading-[1.42857] text-[#111827]">{user.email}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AvatarBar;


