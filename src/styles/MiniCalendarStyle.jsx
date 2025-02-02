import styled from 'styled-components';
import Calendar from 'react-calendar';

// 캘린더
export const MiniCalender = styled.div`
	width: 243px;
	height: 215px;
	border-radius: 5px;
	border: 1px solid #b1b1b1;

	/* 캘린더 전체 틀 */
	.react-calendar {
		border: none;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	/* 달력 상단 */
	.react-calendar__navigation {
		background-color: #ffffff;
		height: 12px;
		margin-bottom: 15px;
		border-radius: 5px;
		border: none;
	}

	/* 달력 상단 버튼 최소 크기 */
	.react-calendar__navigation button {
		min-width: 50px;
	}

	.react-calendar__navigation button:focus {
		background-color: #ffffff !important;
		border-radius: 5px;
	}

	/* 달력 상단 버튼 hover */
	.react-calendar__navigation button:hover {
		background-color: #ffffff !important;
		border-radius: 5px;
	}

	/* 달력 상단 버튼 비활성화 */
	.react-calendar__navigation button:disabled {
		background-color: #ffffff !important;
		border-radius: 5px;
	}

	/* 달력 상단 년/월 글씨, 화살표 커스텀*/
	.react-calendar__navigation__label > span,
	.react-calendar__navigation__arrow {
		font-size: 10px;
		color: #000000;
	}

	/* 요일 하단 구분선 */
	.react-calendar__month-view__weekdays {
		padding: 0 14px;
		border-bottom: 1px solid #eeeeee;
	}

	/* 요일 커스텀 */
	.react-calendar__month-view__weekdays__weekday {
		padding: 3px 5px;
		text-align: left;
	}
	.react-calendar__month-view__weekdays abbr {
		display: block;
		font-weight: 500;
		text-decoration: none;
		font-size: 10px;
		width: 19px;
		text-align: center;
	}

	.react-calendar__month-view__days {
		padding: 0 14px;
	}

	/* 이번달이 아닌 날짜는 연하게 */
	.react-calendar__month-view__days__day--neighboringMonth {
		color: #00000035;
	}

	/* 주말 색 지정 */
	.react-calendar__month-view__days__day--weekend:not(.react-calendar__month-view__days__day--neighboringMonth),
	.react-calendar__month-view__weekdays__weekday--weekend {
		/* 일요알은 빨간색 */
		color: #ff0000;
	}
	.react-calendar__month-view__days__day:not(.react-calendar__month-view__days__day--weekend)
		+ .react-calendar__month-view__days__day--weekend:not(.react-calendar__month-view__days__day--neighboringMonth),
	.react-calendar__month-view__weekdays__weekday + .react-calendar__month-view__weekdays__weekday--weekend {
		/* 토요일은 파란색 */
		color: blue;
	}

	/* 일(각 타일) */
	.react-calendar__month-view__days__day {
		border: 2px solid white !important;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 25.5px;
		/* background-color: #f0f0f0; */
	}
	.react-calendar__month-view__days__day abbr {
		display: block;
		width: 19px;
		height: 19px;
		font-size: 11px;
	}

	.react-calendar__tile abbr {
		position: relative;
		top: -7px;
	}

	/* YearView 각 월 타일 */
	.react-calendar__year-view__months__month {
		border: 2px solid white !important;
		font-size: 5px;
	}

	.react-calendar__tile--hasActive {
		background-color: white;
	}

	/* hover 했을 때 색상 변경(YearView 포함) */
	.react-calendar__tile:enabled:hover {
		background-color: white;
	}

	/* 선택한 날짜(YearView 포함) */
	.react-calendar__tile--active {
		color: black !important;
		background-color: white !important;
	}

	/* 오늘 날짜(YearView 포함) */
	.react-calendar__tile--now {
	}

	/* 오늘 날짜(YearView 포함) hover */
	.react-calendar__tile--now:enabled:hover {
		/* background: #ffffa9; */
		background: #ffffff;
	}

	/* 스티커 */
	.green:not(.react-calendar__year-view__months__month) > abbr {
		background-color: #00ca0899;
		width: 13px;
		height: 13px;
		border-radius: 1px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.yellow:not(.react-calendar__year-view__months__month) > abbr {
		background-color: #ffe50099;
		width: 13px;
		height: 13px;
		border-radius: 1px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.red:not(.react-calendar__year-view__months__month) > abbr {
		background-color: #ff606099;
		width: 13px;
		height: 13px;
		border-radius: 1px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.default:not(.react-calendar__year-view__months__month) > abbr {
		background-color: #ffffff99;
		width: 13px;
		height: 13px;
		border-radius: 1px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const CustomCalendar = styled(Calendar)`
	width: 100%;
	height: 100%;
	font-size: 10px;
	border: 1px solid #b1b1b1;
	border-radius: 5px;
	padding: 10px;
`;
