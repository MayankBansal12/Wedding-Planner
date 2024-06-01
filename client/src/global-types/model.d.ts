interface UserType {
  id: number
  name: string
  email: string
  password: string
  phone: string
  about: string
  profilePic: string
  PicName: string
  role?: string
  participantId?: number
}

interface BudgetType {
  id: number
  eventId: number
  totalAmount: number
  spent: number
}


interface EventType {
  id: number
  name: string
  desc: string
  image: string
  date: Date
  EventParticipant: []
  Photo: []
  Vendor: []
  Budget?: BudgetType | null
  Channel: ChannelType[]
  ChatParticipant: []
  Chat: []
}

interface ChannelType {
  id: number
  eventId: number
  name: string
  venue: string
  desc?: string
  startTime: Date
  endTime: Date
  Event: EventType
  ChannelService: []
  GroupRelation: []
  ChannelParticipant: []
}

export { UserType, EventType, ChannelType, BudgetType }
