// @ts-check
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { ImageDropzone, FileUploadButton } from 'react-file-utils';
import { TranslationContext, ChannelContext } from '../../context';
import { ChatAutoComplete } from '../ChatAutoComplete';
import { Tooltip } from '../Tooltip';
import useMessageInput from './hooks/messageInput';
import UploadsPreview from './UploadsPreview';
import EmojiPicker from './EmojiPicker';
import SendButtonComponent from './SendButton';

/** @type {React.FC<import("types").MessageInputProps>} */
const MessageInputSmall = (props) => {
  useEffect(() => {
    const event = new Event('MessageInputSmall-mounted');
    document.dispatchEvent(event);
  }, []);

  const messageInput = useMessageInput(props);
  const channelContext = useContext(ChannelContext);
  const { t } = useContext(TranslationContext);
  const { SendButton } = props;

  return (
    <div className="str-chat__small-message-input__wrapper">
      <ImageDropzone
        accept={channelContext.acceptedFiles}
        multiple={channelContext.multipleUploads}
        disabled={
          !messageInput.isUploadEnabled || messageInput.maxFilesLeft === 0
        }
        maxNumberOfFiles={messageInput.maxFilesLeft}
        handleFiles={messageInput.uploadNewFiles}
      >
        <div id="record-button">
          <svg
            viewBox="0 0 16.933333 21.166666250000002"
            version="1.1"
            x="0px"
            y="0px"
          >
            <g transform="translate(0,-280.06669)">
              <path d="m 8.4667969,280.5957 c -2.3361139,0 -4.234375,1.89826 -4.234375,4.23438 v 3.17383 c 0,2.33611 1.8982628,4.23437 4.234375,4.23437 2.3361121,0 4.2324221,-1.89826 4.2324221,-4.23437 v -3.17383 c 0,-2.33612 -1.896308,-4.23438 -4.2324221,-4.23438 z" />
              <path d="m 2.6367188,287.4668 c -0.2923548,0.004 -0.5258745,0.24476 -0.5214844,0.53711 -10e-8,3.48009 2.8714729,6.35156 6.3515625,6.35156 3.4802381,0 6.3496091,-2.8729 6.3496091,-6.35156 0,-0.70573 -1.058594,-0.70573 -1.058594,0 0,2.89614 -2.393779,5.29297 -5.2910151,5.29297 -2.8973841,0 -5.2929689,-2.39559 -5.2929688,-5.29297 0.00448,-0.29848 -0.2386342,-0.54159 -0.5371093,-0.53711 z" />
              <path d="m 6.3496094,295.41211 c -0.7057265,0 -0.7057265,1.05859 0,1.05859 h 4.2343746 c 0.705726,0 0.705726,-1.05859 0,-1.05859 z" />
            </g>
          </svg>
        </div>
        <div
          className={`str-chat__small-message-input ${
            SendButton
              ? 'str-chat__small-message-input--send-button-active'
              : null
          }`}
        >
          <EmojiPicker {...messageInput} small />
          <div className="str-chat__small-message-input--textarea-wrapper">
            {messageInput.isUploadEnabled && (
              <UploadsPreview {...messageInput} />
            )}

            <ChatAutoComplete
              commands={messageInput.getCommands()}
              innerRef={messageInput.textareaRef}
              handleSubmit={messageInput.handleSubmit}
              onChange={messageInput.handleChange}
              value={messageInput.text}
              rows={1}
              maxRows={props.maxRows}
              onSelectItem={messageInput.onSelectItem}
              placeholder={t('Type your message')}
              onPaste={messageInput.onPaste}
              triggers={props.autocompleteTriggers}
              grow={props.grow}
              disabled={props.disabled}
              SuggestionList={props.SuggestionList}
              additionalTextareaProps={props.additionalTextareaProps}
            />

            <div className="str-chat__emojiselect-wrapper">
              <Tooltip>{t('Open emoji picker')}</Tooltip>
              <span
                className="str-chat__small-message-input-emojiselect"
                onClick={messageInput.openEmojiPicker}
              >
                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                  <title>{t('Open emoji picker')}</title>
                  <path
                    d="M11.108 8.05a.496.496 0 0 1 .212.667C10.581 10.147 8.886 11 7 11c-1.933 0-3.673-.882-4.33-2.302a.497.497 0 0 1 .9-.417C4.068 9.357 5.446 10 7 10c1.519 0 2.869-.633 3.44-1.738a.495.495 0 0 1 .668-.212zm.792-1.826a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.298 0-.431.168-.54.307A.534.534 0 0 1 9.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zm-7 0a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.299 0-.432.168-.54.307A.533.533 0 0 1 2.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zM7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0zm4.243 11.243A5.96 5.96 0 0 0 13 7a5.96 5.96 0 0 0-1.757-4.243A5.96 5.96 0 0 0 7 1a5.96 5.96 0 0 0-4.243 1.757A5.96 5.96 0 0 0 1 7a5.96 5.96 0 0 0 1.757 4.243A5.96 5.96 0 0 0 7 13a5.96 5.96 0 0 0 4.243-1.757z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            {messageInput.isUploadEnabled && (
              <div
                className="str-chat__fileupload-wrapper"
                data-testid="fileinput"
              >
                <Tooltip>
                  {messageInput.maxFilesLeft
                    ? t('Attach files')
                    : t("You've reached the maximum number of files")}
                </Tooltip>
                <FileUploadButton
                  multiple={channelContext.multipleUploads}
                  disabled={messageInput.maxFilesLeft === 0}
                  accepts={channelContext.acceptedFiles}
                  handleFiles={messageInput.uploadNewFiles}
                >
                  <span className="str-chat__small-message-input-fileupload">
                    <svg
                      width="14"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>{t('Attach files')}</title>
                      <path
                        d="M7 .5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5S.5 10.59.5 7 3.41.5 7 .5zm0 12c3.031 0 5.5-2.469 5.5-5.5S10.031 1.5 7 1.5A5.506 5.506 0 0 0 1.5 7c0 3.034 2.469 5.5 5.5 5.5zM7.506 3v3.494H11v1.05H7.506V11h-1.05V7.544H3v-1.05h3.456V3h1.05z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </span>
                </FileUploadButton>
              </div>
            )}
          </div>
          {SendButton && <SendButton sendMessage={messageInput.handleSubmit} />}
        </div>
      </ImageDropzone>
    </div>
  );
};

MessageInputSmall.propTypes = {
  /** Set focus to the text input if this is enabled */
  focus: PropTypes.bool.isRequired,
  /** Grow the textarea while you're typing */
  grow: PropTypes.bool.isRequired,
  /** Specify the max amount of rows the textarea is able to grow */
  maxRows: PropTypes.number.isRequired,
  /** Make the textarea disabled */
  disabled: PropTypes.bool,
  /** enable/disable firing the typing event */
  publishTypingEvent: PropTypes.bool,
  /**
   * Any additional attrubutes that you may want to add for underlying HTML textarea element.
   */
  additionalTextareaProps: PropTypes.object,
  /**
   * Override the default triggers of the ChatAutoComplete component
   */
  autocompleteTriggers: PropTypes.object,
  /**
   * @param message: the Message object to be sent
   * @param cid: the channel id
   */
  overrideSubmitHandler: PropTypes.func,
  /** Override image upload request */
  doImageUploadRequest: PropTypes.func,
  /** Override file upload request */
  doFileUploadRequest: PropTypes.func,
  /**
   * Custom UI component for send button.
   *
   * Defaults to and accepts same props as: [SendButton](https://getstream.github.io/stream-chat-react/#sendbutton)
   * */
  // @ts-ignore
  SendButton: PropTypes.elementType,
  /** Optional UI component prop to override the default List component that displays suggestions */
  SuggestionList: /** @type {PropTypes.Validator<React.ElementType<import('types').SuggestionListProps>>} */ (PropTypes.elementType),
};

MessageInputSmall.defaultProps = {
  focus: false,
  disabled: false,
  publishTypingEvent: true,
  grow: true,
  maxRows: 10,
  SendButton: SendButtonComponent,
  additionalTextareaProps: {},
};

export default MessageInputSmall;
