import actionMessage from './directives/actionMessage';
import allMessageLabels from './directives/allMessageLabels';
import displayContentBtn from './directives/displayContentBtn';
import embeddedImgLoader from './directives/embeddedImgLoader';
import encryptionStatus from './directives/encryptionStatus';
import filterButton from './directives/filterButton';
import foldersMessage from './directives/foldersMessage';
import injectMessageMedia from './directives/injectMessageMedia';
import message from './directives/message';
import messageAddressActionMenu from './directives/messageAddressActionMenu';
import messageAddressActions from './directives/messageAddressActions';
import messageAutoGenerated from './directives/messageAutoGenerated';
import messageMimeParsing from './directives/messageMimeParsing';
import messageExpiration from './directives/messageExpiration';
import messagePublicKeyFound from './directives/messagePublicKeyFound';
import messagePublicKeyPinning from './directives/messagePublicKeyPinning';
import messageResign from './directives/messageResign';
import messageComposeTo from './directives/messageComposeTo';
import messageContacts from './directives/messageContacts';
import messageContactsIcon from './directives/messageContactsIcon';
import messageExtra from './directives/messageExtra';
import messageSignatureStatus from './directives/messageSignatureStatus';
import messageSpamScore from './directives/messageSpamScore';
import messageView from './directives/messageView';
import phishingBtn from './directives/phishingBtn';
import renderMessageBody from './directives/renderMessageBody';
import toggleBlockquote from './directives/toggleBlockquote';
import toggleMessage from './directives/toggleMessage';
import unsubscribePanel from './directives/unsubscribePanel';
import trustPublicKeyTable from './directives/trustPublicKeyTable';
import trustPublicKeyInfo from './directives/trustPublicKeyInfo';
import messageSenderSettings from './factories/messageSenderSettings';
import displayContent from './factories/displayContent';
import displayEmbedded from './factories/displayEmbedded';
import displayImages from './factories/displayImages';
import messageActions from './factories/messageActions';
import messageApi from './factories/messageApi';
import messageModel from './factories/messageModel';
import plusAliasModel from './factories/plusAliasModel';
import signatureBuilder from './factories/signatureBuilder';
import simpleSend from './factories/simpleSend';
import trustPublicKeyModal from './factories/trustPublicKeyModal';
import unsubscribeModel from './factories/unsubscribeModel';
import getEncryptionType from './factories/getEncryptionType';
import keyCache from './factories/keyCache';
import publicKeyStore from './factories/publicKeyStore';
import filterMessages from './filters/filterMessages';
import messageTime from './filters/messageTime';
import nameRecipient from './filters/nameRecipient';
import recipients from './filters/recipients';
import attachedPublicKey from './services/attachedPublicKey';
import findExpandableMessage from './services/findExpandableMessage';
import messageBuilder from './services/messageBuilder';
import prepareContent from './services/prepareContent';
import transformAttachements from './services/transformAttachements';
import transformBlockquotes from './services/transformBlockquotes';
import transformEmbedded from './services/transformEmbedded';
import transformRemote from './services/transformRemote';
import transformStylesheet from './services/transformStylesheet';
import transformWelcome from './services/transformWelcome';
import messageDisplayError from './directives/messageDisplayError';
import prepareDraft from './factories/prepareDraft';
import pgpModal from './modals/pgpModal';
import readReceiptPanel from './directives/readReceiptPanel';
import readReceiptModel from './factories/readReceiptModel';
import recipientsFormator from './services/recipientsFormator';
import cacheBase64 from './factories/cacheBase64';

export default angular
    .module('proton.message', ['ngSanitize', 'proton.contact', 'proton.squire'])
    .factory('cacheBase64', cacheBase64)
    .factory('readReceiptModel', readReceiptModel)
    .directive('readReceiptPanel', readReceiptPanel)
    .factory('pgpModal', pgpModal)
    .factory('prepareDraft', prepareDraft)
    .factory('recipientsFormator', recipientsFormator)
    .directive('messageDisplayError', messageDisplayError)
    .run((unsubscribeModel) => unsubscribeModel.init())
    .directive('actionMessage', actionMessage)
    .directive('allMessageLabels', allMessageLabels)
    .directive('displayContentBtn', displayContentBtn)
    .directive('embeddedImgLoader', embeddedImgLoader)
    .directive('encryptionStatus', encryptionStatus)
    .directive('filterButton', filterButton)
    .directive('foldersMessage', foldersMessage)
    .directive('injectMessageMedia', injectMessageMedia)
    .directive('message', message)
    .directive('messageAddressActionMenu', messageAddressActionMenu)
    .directive('messageAddressActions', messageAddressActions)
    .directive('messageAutoGenerated', messageAutoGenerated)
    .directive('messageMimeParsing', messageMimeParsing)
    .directive('messageExpiration', messageExpiration)
    .directive('messagePublicKeyFound', messagePublicKeyFound)
    .directive('messagePublicKeyPinning', messagePublicKeyPinning)
    .directive('messageResign', messageResign)
    .directive('messageComposeTo', messageComposeTo)
    .directive('messageContacts', messageContacts)
    .directive('messageContactsIcon', messageContactsIcon)
    .directive('messageExtra', messageExtra)
    .directive('messageSignatureStatus', messageSignatureStatus)
    .directive('messageSpamScore', messageSpamScore)
    .directive('messageView', messageView)
    .directive('phishingBtn', phishingBtn)
    .directive('renderMessageBody', renderMessageBody)
    .directive('toggleBlockquote', toggleBlockquote)
    .directive('toggleMessage', toggleMessage)
    .directive('unsubscribePanel', unsubscribePanel)
    .directive('trustPublicKeyTable', trustPublicKeyTable)
    .directive('trustPublicKeyInfo', trustPublicKeyInfo)
    .factory('displayContent', displayContent)
    .factory('displayEmbedded', displayEmbedded)
    .factory('displayImages', displayImages)
    .factory('messageActions', messageActions)
    .factory('messageApi', messageApi)
    .factory('messageModel', messageModel)
    .factory('messageSenderSettings', messageSenderSettings)
    .factory('plusAliasModel', plusAliasModel)
    .factory('signatureBuilder', signatureBuilder)
    .factory('simpleSend', simpleSend)
    .factory('trustPublicKeyModal', trustPublicKeyModal)
    .factory('publicKeyStore', publicKeyStore)
    .factory('getEncryptionType', getEncryptionType)
    .factory('keyCache', keyCache)
    .factory('unsubscribeModel', unsubscribeModel)
    .filter('filterMessages', filterMessages)
    .filter('messageTime', messageTime)
    .filter('nameRecipient', nameRecipient)
    .filter('recipients', recipients)
    .factory('attachedPublicKey', attachedPublicKey)
    .factory('findExpandableMessage', findExpandableMessage)
    .factory('messageBuilder', messageBuilder)
    .factory('prepareContent', prepareContent)
    .factory('transformAttachements', transformAttachements)
    .factory('transformBlockquotes', transformBlockquotes)
    .factory('transformEmbedded', transformEmbedded)
    .factory('transformRemote', transformRemote)
    .factory('transformStylesheet', transformStylesheet)
    .factory('transformWelcome', transformWelcome).name;
