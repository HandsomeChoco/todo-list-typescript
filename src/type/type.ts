export interface AppContainerProps {
  children: React.ReactNode
}

export interface GlobalThemeProps {
  children: React.ReactNode
}

export interface Holidays {
  dateKind: string,
  dateName: string,
  isHoliday: "Y" | "N",
  locdate: number,
  seq: number
};