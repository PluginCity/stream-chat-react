// @ts-check
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Avatar as DefaultAvatar } from '../Avatar';
import { ChannelContext, TranslationContext, ChatContext } from '../../context';

/**
 * ChannelHeader - Render some basic information about this channel
 * @example ../../docs/ChannelHeader.md
 * @type {React.FC<import('types').ChannelHeaderProps>}
 */
const ChannelHeader = ({ Avatar = DefaultAvatar, title, live }) => {
  useEffect(() => {
    const event = new Event('ChannelHeader-mounted');
    document.dispatchEvent(event);
  }, []);
  /** @type {import("types").TranslationContextValue} */
  const { t } = useContext(TranslationContext);
  /** @type {import("types").ChannelContextValue} */
  const { channel, watcher_count } = useContext(ChannelContext);
  const { openMobileNav } = useContext(ChatContext);
  const { image, member_count, name, subtitle } = channel?.data || {};

  return (
    <div className="str-chat__header-livestream">
      <div className="str-chat__header-hamburger" onClick={openMobileNav}>
        <span className="str-chat__header-hamburger--line"></span>
        <span className="str-chat__header-hamburger--line"></span>
        <span className="str-chat__header-hamburger--line"></span>
      </div>
      {image && (
        <Avatar
          image={image}
          shape="rounded"
          size={channel?.type === 'commerce' ? 60 : 40}
        />
      )}
      <div className="str-chat__header-livestream-left">
        <div>
          <p className="str-chat__header-livestream-left--title">
            {title || name}{' '}
            {live && (
              <span className="str-chat__header-livestream-left--livelabel">
                {t('live')}
              </span>
            )}
          </p>
          {subtitle && (
            <p className="str-chat__header-livestream-left--subtitle">
              {subtitle}
            </p>
          )}
          <p className="str-chat__header-livestream-left--members">
            {!live && !!member_count && member_count > 0 && (
              <>
                {t('{{ memberCount }} members', {
                  memberCount: member_count,
                })}
                ,{' '}
              </>
            )}
            {t('{{ watcherCount }} online', { watcherCount: watcher_count })}
          </p>
        </div>
        <div id="pcmc-settings-button">
          <svg
            height="40"
            width="40"
            viewBox="0 0 6.3499999 7.93750025"
            version="1.1"
            x="0px"
            y="0px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(0,-290.64999)">
              <path
                d="M 11 1 A 1.0001 1.0001 0 0 0 10.105469 1.5527344 L 9.1210938 3.5234375 C 8.7543774 3.6500517 8.398118 3.7997051 8.0507812 3.9726562 L 5.953125 3.2734375 A 1.0001 1.0001 0 0 0 4.9296875 3.515625 L 3.515625 4.9296875 A 1.0001 1.0001 0 0 0 3.2734375 5.953125 L 3.9726562 8.046875 C 3.8027816 8.3934577 3.6552405 8.7496029 3.53125 9.1152344 L 1.5527344 10.105469 A 1.0001 1.0001 0 0 0 1 11 L 1 13 A 1.0001 1.0001 0 0 0 1.5527344 13.894531 L 3.5234375 14.878906 C 3.6499954 15.24552 3.799884 15.60188 3.9726562 15.949219 L 3.2734375 18.046875 A 1.0001 1.0001 0 0 0 3.515625 19.070312 L 4.9296875 20.484375 A 1.0001 1.0001 0 0 0 5.953125 20.726562 L 8.046875 20.027344 C 8.3935711 20.197045 8.7496074 20.344819 9.1152344 20.46875 L 10.105469 22.447266 A 1.0001 1.0001 0 0 0 11 23 L 13 23 A 1.0001 1.0001 0 0 0 13.894531 22.447266 L 14.878906 20.476562 C 15.245622 20.349948 15.601882 20.200295 15.949219 20.027344 L 18.046875 20.726562 A 1.0001 1.0001 0 0 0 19.070312 20.484375 L 20.484375 19.070312 A 1.0001 1.0001 0 0 0 20.726562 18.046875 L 20.027344 15.953125 C 20.197215 15.606542 20.34476 15.250397 20.46875 14.884766 L 22.447266 13.894531 A 1.0001 1.0001 0 0 0 23 13 L 23 11 A 1.0001 1.0001 0 0 0 22.447266 10.105469 L 20.476562 9.1210938 C 20.350005 8.7544795 20.200116 8.3981199 20.027344 8.0507812 L 20.726562 5.953125 A 1.0001 1.0001 0 0 0 20.484375 4.9296875 L 19.070312 3.515625 A 1.0001 1.0001 0 0 0 18.046875 3.2734375 L 15.953125 3.9726562 C 15.606429 3.8025775 15.250392 3.6551807 14.884766 3.53125 L 13.894531 1.5527344 A 1.0001 1.0001 0 0 0 13 1 L 11 1 z M 12 8 A 4.0000002 4.0000002 0 0 1 16 12 A 4.0000002 4.0000002 0 0 1 12 16 A 4.0000002 4.0000002 0 0 1 8 12 A 4.0000002 4.0000002 0 0 1 12 8 z "
                transform="matrix(0.26458334,0,0,0.26458334,0,290.64999)"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

ChannelHeader.propTypes = {
  /**
   * Custom UI component to display user avatar
   *
   * Defaults to and accepts same props as: [Avatar](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Avatar/Avatar.js)
   * */
  Avatar: /** @type {PropTypes.Validator<React.ElementType<import('types').AvatarProps>>} */ (PropTypes.elementType),
  /** Set title manually */
  title: PropTypes.string,
  /** Show a little indicator that the channel is live right now */
  live: PropTypes.bool,
};

export default React.memo(ChannelHeader);
