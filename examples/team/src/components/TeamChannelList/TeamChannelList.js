import React from 'react';

import './TeamChannelList.css';

import { AddChannel } from '../../assets/AddChannel';

export const TeamChannelList = ({ error = false, loading, children }) => {
  /**
   * Work around to remove children of other channel type, since we have
   * two ChannelList components in the app and each new message send
   * adds the channel in question to children on each list.
   */
  let newChildren = children;
  const childArray = newChildren?.props?.children?.filter(
    (child) => child.props.channel.type === 'team',
  );

  newChildren = {
    ...newChildren,
    props: {
      children: childArray,
    },
  };

  if (error) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error, please wait a moment and try again.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message">Channels loading....</p>
      </div>
    );
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">Channels</p>
        <AddChannel />
      </div>
      {newChildren}
    </div>
  );
};