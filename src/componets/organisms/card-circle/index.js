import { CircleComponent } from '../../molecules';
import { TitleComponet, DivisionLine } from '../../atoms';
import {
	ContentCardCircle,
	ContetText,
	ContentFooterText,
	ContentCardChild,
	SubContentText,
	SubContentLeftText,
} from './style';
import theme from '../../../themes';

function CardCircle({ dataCard }) {
	return (
		<>
			{dataCard &&
				dataCard.length > 0 &&
				dataCard.map((itemCard, index) => (
					<ContentCardCircle key={index}>
						<CircleComponent dataInfo={itemCard} />
						<ContentCardChild>
							<ContentFooterText>
								<ContetText>
									<div style={{ textAlign: 'left' }}>
										<TitleComponet
											fontSize='15px'
											variant='title'
											color={
												(itemCard.title === 'REVENUE' &&
													theme.color.greenText) ||
												(itemCard.title === 'IMPRESIONS' &&
													theme.color.blueText) ||
												(itemCard.title === 'VISITS' && theme.color.yellowText)
											}>
											Tablet
										</TitleComponet>
									</div>
									<SubContentText>
										<div style={{ textAlign: 'left' }}>
											<TitleComponet
												fontSize='15px'
												variant='title'
												color={theme.color.grayBold}>
												{itemCard.percentageTablet}%
											</TitleComponet>
										</div>
										<div style={{ width: '55%' }}>
											<TitleComponet
												fontSize='15px'
												variant='title'
												color={theme.color.gray}>
												{itemCard.titleDescriptionRight}
											</TitleComponet>
										</div>
									</SubContentText>
								</ContetText>
								<ContetText>
									<div style={{ textAlign: 'right' }}>
										<TitleComponet
											fontSize='15px'
											variant='title'
											color={
												(itemCard.title === 'REVENUE' &&
													theme.color.greeRegular) ||
												(itemCard.title === 'IMPRESIONS' &&
													theme.color.blueRegular) ||
												(itemCard.title === 'VISITS' &&
													theme.color.yellowRegular)
											}>
											Smartphone
										</TitleComponet>
									</div>
									<SubContentLeftText>
										<div style={{ width: '45%' }}>
											<TitleComponet
												fontSize='15px'
												variant='title'
												color={theme.color.grayBold}>
												{itemCard.percentageSmartphone}%
											</TitleComponet>
										</div>
										<div>
											<TitleComponet
												fontSize='15px'
												variant='title'
												color={theme.color.gray}>
												{itemCard.titleDescriptionLef}
											</TitleComponet>
										</div>
									</SubContentLeftText>
								</ContetText>
							</ContentFooterText>
							<DivisionLine />
						</ContentCardChild>
					</ContentCardCircle>
				))}
		</>
	);
}

export default CardCircle;
