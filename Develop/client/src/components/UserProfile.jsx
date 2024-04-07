// src/components/UserProfile.jsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const UserProfile = () => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  return (
    <div>
      <h1>{data.me.username}'s Profile</h1>
      {/* Render more user details */}
    </div>
  );
};

export default UserProfile;
