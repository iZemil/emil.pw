import { createIconAliases } from 'react-aui';

export const Icons = createIconAliases((bs) => ({
	InTxn: bs.BsBoxArrowInDownRight,
	OutTxn: bs.BsBoxArrowUpRight,
	Markdown: bs.BsMarkdown,
	ChevronDown: bs.BsChevronDown,
	ChevronUp: bs.BsChevronUp,
	AddPayForm: bs.BsPlusSquare,
	Canceled: bs.BsClipboardX,
	Populated: bs.BsFillLightningFill,
	PaymentForm: bs.BsStack,
	MoreVert: bs.BsThreeDotsVertical,
	Dashboard: bs.BsGrid1X2Fill,
	See: bs.BsEye,
	Empty: bs.BsInbox,
	Hidden: bs.BsEyeSlash,
	Unarchive: bs.BsFileArrowUp,
	Archive: bs.BsFileArrowDown,
	Withdraw: bs.BsCashStack,
	Pending: bs.BsClock,
	Paid: bs.BsCurrencyDollar,
	Charge: bs.BsLightningChargeFill,
}));
