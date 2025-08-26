const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Debug logging
console.log('🔍 API_BASE_URL:', API_BASE_URL);
console.log('🔍 process.env.NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);

interface ApiResponse<T> {
  data: T;
  status: number;
}

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  full_name: string;
  phone?: string;
  is_phone_verified: boolean;
  address?: string;
  profile_picture?: string;
  is_verified: boolean;
  pets_count: number;
  date_joined: string;
}

export interface Breed {
  id: number;
  name: string;
  pet_type: string;
  description?: string;
}

export interface Pet {
  id: number;
  name: string;
  pet_type: string;
  pet_type_display: string;
  breed: number;
  breed_name: string;
  age_months: number;
  age_display: string;
  gender: string;
  gender_display: string;
  color: string;
  weight: number;
  description: string;
  health_status: string;
  is_fertile: boolean;
  breeding_history?: string;
  last_breeding_date?: string;
  number_of_offspring: number;
  temperament: string;
  is_trained: boolean;
  good_with_kids: boolean;
  good_with_pets: boolean;
  main_image: string;
  image_2?: string;
  image_3?: string;
  image_4?: string;
  status: string;
  status_display: string;
  location: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
  distance_display?: string;
  is_free: boolean;
  price_display: string;
  owner_name: string;
  owner_email: string;
  created_at: string;
  updated_at: string;
  // Health certificates
  vaccination_certificate?: string;
  health_certificate?: string;
  disease_free_certificate?: string;
  additional_certificate?: string;
  has_health_certificates?: boolean;
}

export interface VeterinaryClinic {
  id: number;
  name: string;
  code: string;
  address: string;
  city: string;
  phone: string;
  email?: string;
  working_hours: string;
  is_active: boolean;
}

export interface BreedingRequest {
  id: number;
  target_pet: number;
  target_pet_details: Pet;
  requester_pet: number;
  requester_pet_details: Pet;
  requester: number;
  requester_name: string;
  receiver: number;
  receiver_name: string;
  message?: string;
  meeting_date: string;
  veterinary_clinic: number;
  veterinary_clinic_details: VeterinaryClinic;
  contact_phone: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed' | 'cancelled';
  status_display: string;
  response_message?: string;
  created_at: string;
  updated_at: string;
  completed_at?: string;
}

export interface Notification {
  id: number;
  type: string;
  type_display: string;
  title: string;
  message: string;
  related_pet?: number;
  related_pet_details?: Pet;
  related_breeding_request?: number;
  is_read: boolean;
  read_at?: string;
  extra_data: unknown;
  created_at: string;
  time_ago: string;
}



export interface Favorite {
  id: number;
  pet: Pet;
  user: number;
  created_at: string;
}

// Chat Interfaces
export interface ChatRoom {
  id: number;
  firebase_chat_id: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  participants: Record<string, ChatParticipant>;
  other_participant: ChatParticipant;
  pet_details: ChatPetDetails;
}

export interface ChatParticipant {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface ChatPetDetails {
  id: number;
  name: string;
  breed_name: string;
  pet_type_display: string;
  main_image?: string;
}

export interface ChatRoomList {
  id: number;
  firebase_chat_id: string;
  created_at: string;
  updated_at: string;
  other_participant: string;
  pet_name: string;
  pet_image?: string;
}

export interface ChatContext {
  chat_id: string;
  breeding_request: {
    id: number;
    status: string;
    created_at: string;
    message?: string;
  };
  pet: ChatPetDetails & {
    owner_name: string;
  };
  participants: Record<string, ChatParticipant>;
  metadata: {
    created_at: string;
    updated_at: string;
    is_active: boolean;
  };
}

export interface ChatStatus {
  id: number;
  firebase_chat_id: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  breeding_request_status: string;
  participants_count: number;
}

export interface UserChatStatus {
  has_active_chats: boolean;
  active_chats_count: number;
  has_unread_messages: boolean;
}

// Adoption interfaces
export interface AdoptionRequest {
  id: number;
  adopter: number;
  pet: number;
  adopter_name: string;
  adopter_email: string;
  pet_name: string;
  pet_owner_name: string;
  adopter_full_name: string;
  adopter_phone: string;
  adopter_address: string;
  adopter_id_number: string;
  
  // صور البطاقة الوطنية
  national_id_front?: string;
  national_id_back?: string;
  
  // معلومات السكن
  housing_type: string;
  has_yard: boolean;
  yard_size?: string;
  family_members: number;
  children_ages?: string;
  other_pets: boolean;
  other_pets_details?: string;
  
  // الخبرة والوقت
  experience_level: string;
  time_availability: string;
  has_other_pets: boolean;
  
  // الموافقات والخطط
  family_agreement: boolean;
  agrees_to_follow_up: boolean;
  agrees_to_vet_care: boolean;
  agrees_to_training: boolean;
  
  // خطط الرعاية
  feeding_plan: string;
  exercise_plan: string;
  vet_care_plan: string;
  emergency_plan: string;
  
  // المستندات الإضافية
  signature_image?: string;
  additional_documents?: string;
  
  // معلومات إضافية
  reason_for_adoption: string;
  previous_experience?: string;
  special_requirements?: string;
  
  // الحقول القديمة (للتوافق)
  living_situation?: string;
  living_situation_display?: string;
  previous_pet_experience?: string;
  monthly_budget?: string;
  has_vet_nearby?: boolean;
  family_size?: number;
  has_children?: boolean;
  agrees_to_terms?: boolean;
  agrees_to_visit?: boolean;
  agrees_to_return?: boolean;
  
  // حالة الطلب
  status: string;
  status_display: string;
  notes?: string;
  admin_notes?: string;
  created_at: string;
  updated_at: string;
  approved_at?: string;
  completed_at?: string;
  can_be_approved: boolean;
  can_be_completed: boolean;
  
  // النتيجة
  score?: number;
  score_display?: string;
}

export interface AdoptionRequestCreate {
  pet: number;
  
  // معلومات أساسية
  adopter_name: string;
  adopter_email: string;
  adopter_phone: string;
  adopter_age: number;
  adopter_occupation: string;
  adopter_address: string;
  adopter_id_number: string;
  
  // صور البطاقة الوطنية
  national_id_front: File | null;
  national_id_back: File | null;
  
  // معلومات السكن
  housing_type: string;
  has_yard: boolean;
  yard_size?: string;
  family_members: number;
  children_ages?: string;
  other_pets: boolean;
  other_pets_details?: string;
  
  // الخبرة والوقت
  experience_level: string;
  time_availability: string;
  has_other_pets: boolean;
  
  // الموافقات والخطط
  family_agreement: boolean;
  agrees_to_follow_up: boolean;
  agrees_to_vet_care: boolean;
  agrees_to_training: boolean;
  
  // خطط الرعاية
  feeding_plan: string;
  exercise_plan: string;
  vet_care_plan: string;
  emergency_plan: string;
  
  // المستندات الإضافية
  signature_image: File | null;
  additional_documents: File | null;
  
  // معلومات إضافية
  reason_for_adoption: string;
  previous_experience?: string;
  special_requirements?: string;
  
  // الحقول القديمة (للتوافق)
  adopter_full_name?: string;
  living_situation?: string;
  has_yard_old?: boolean;
  yard_size_old?: string;
  other_pets_old?: string;
  previous_pet_experience?: string;
  monthly_budget?: string;
  has_vet_nearby?: boolean;
  family_size?: number;
  has_children?: boolean;
  agrees_to_terms?: boolean;
  agrees_to_visit?: boolean;
  agrees_to_return?: boolean;
}

export interface AdoptionRequestList {
  id: number;
  adopter_name: string;
  pet_name: string;
  pet_image: string;
  pet_breed: string;
  adopter_full_name: string;
  adopter_phone: string;
  status: string;
  status_display: string;
  created_at: string;
  monthly_budget: string;
}

export interface AdoptionStats {
  total_available_for_adoption: number;
  total_adoption_pending: number;
  total_adopted: number;
  my_adoption_requests: number;
  my_pending_requests: number;
  received_requests: number;
}

class ApiService {
  private getAuthHeaders(): HeadersInit {
    if (typeof window === 'undefined') {
      // Server-side rendering - no localStorage
      return {
        'Content-Type': 'application/json',
      };
    }
    
    const token = localStorage.getItem('authToken');
    console.log('Debug - API Token:', token);
    console.log('Debug - Token exists:', !!token);
    console.log('Debug - Token length:', token ? token.length : 0);
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    
    if (token) {
      headers.Authorization = `Token ${token}`;
      console.log('Debug - Authorization header set:', `Token ${token}`);
    } else {
      console.log('Debug - No token found, no Authorization header');
    }
    
    console.log('Debug - Final auth headers:', headers);
    return headers;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    console.log('API Request:', url);
    
    // Prepare headers
    let headers = this.getAuthHeaders();
    console.log('Debug - Initial headers:', headers);
    
    // If options has custom headers, merge them but avoid Content-Type for FormData
    if (options.headers) {
      headers = { ...headers, ...options.headers };
      console.log('Debug - After merging custom headers:', headers);
    }
    
    // If body is FormData, remove Content-Type to let browser set it with boundary
    if (options.body instanceof FormData) {
      const headersRecord = headers as Record<string, string>;
      const { 'Content-Type': _, ...headersWithoutContentType } = headersRecord;
      headers = headersWithoutContentType;
      console.log('Debug - After removing Content-Type for FormData:', headers);
      
      // Also remove Content-Type from options.headers if it exists
      if (options.headers) {
        const optionsHeadersRecord = options.headers as Record<string, string>;
        const { 'Content-Type': __, ...optionsHeadersWithoutContentType } = optionsHeadersRecord;
        options.headers = optionsHeadersWithoutContentType;
        console.log('Debug - After removing Content-Type from options.headers:', options.headers);
      }
    }
    
    console.log('Debug - Final headers being sent:', headers);
    console.log('Debug - Request body type:', typeof options.body);
    console.log('Debug - Request body instanceof FormData:', options.body instanceof FormData);
    
    const response = await fetch(url, {
      headers,
      ...options,
    });

    console.log('API Response status:', response.status);

    if (!response.ok) {
      console.error('Response not OK:', response.status, response.statusText);
      console.error('Response headers:', Object.fromEntries(response.headers.entries()));
      
      let errorData = {};
      try {
        const responseText = await response.text();
        console.error('Response text:', responseText);
        if (responseText) {
          errorData = JSON.parse(responseText);
        }
      } catch (e) {
        console.error('Could not parse response as JSON:', e);
      }
      
      console.error('API Error data:', errorData);
      throw new Error((errorData as { detail?: string; error?: string }).detail || (errorData as { detail?: string; error?: string }).error || `HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  // Authentication
  async login(email: string, password: string): Promise<{ key: string; user: User }> {
    const response = await this.request<{ key: string; user: User }>('/auth/login/', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    localStorage.setItem('authToken', response.key);
    return response;
  }

  async register(userData: {
    email: string;
    password1: string;
    password2: string;
    first_name: string;
    last_name: string;
    phone: string; // مطلوب الآن
    address?: string;
  }): Promise<{ key: string; user: User }> {
    const response = await this.request<{ key: string; user: User }>('/accounts/register/', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    localStorage.setItem('authToken', response.key);
    return response;
  }

  async logout(): Promise<void> {
    await this.request('/auth/logout/', { method: 'POST' });
    localStorage.removeItem('authToken');
  }

  async getUserProfile(): Promise<User> {
    return this.request<User>('/accounts/profile/');
  }

  async updateUserProfile(data: Partial<User>): Promise<User> {
    return this.request<User>('/accounts/profile/', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  // Breeds
  async getBreeds(): Promise<Breed[]> {
    const response = await this.request<PaginatedResponse<Breed>>('/pets/breeds/');
    return response.results || [];
  }

  // Pets
  async getPets(params?: {
    search?: string;
    pet_type?: string;
    gender?: string;
    status?: string;
    location?: string;
    min_price?: number;
    max_price?: number;
    breed?: number;
    is_fertile?: boolean;
    ordering?: string;
    page?: number;
    user_lat?: number;
    user_lng?: number;
  }): Promise<PaginatedResponse<Pet>> {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const endpoint = `/pets/${searchParams.toString() ? `?${searchParams}` : ''}`;
    return this.request<PaginatedResponse<Pet>>(endpoint);
  }

  async getPet(id: number): Promise<Pet> {
    return this.request<Pet>(`/pets/${id}/`);
  }

  async createPet(petData: Record<string, string | number | boolean | null | undefined>, images?: { [key: string]: File }): Promise<Pet> {
    const formData = new FormData();
    
    // Add text data
    Object.keys(petData).forEach(key => {
      if (petData[key] !== null && petData[key] !== undefined) {
        formData.append(key, String(petData[key]));
      }
    });
    
    // Add images
    if (images) {
      Object.keys(images).forEach(key => {
        if (images[key]) {
          formData.append(key, images[key]);
        }
      });
    }
    
    // Get auth headers but exclude Content-Type for FormData
    const authHeaders = this.getAuthHeaders();
    const headersRecord = authHeaders as Record<string, string>;
    const { 'Content-Type': _, ...headersWithoutContentType } = headersRecord;
    console.log('Debug - createPet auth headers (without Content-Type):', headersWithoutContentType);
    
    return this.request<Pet>('/pets/', {
      method: 'POST',
      body: formData,
      // Pass auth headers without Content-Type
      headers: headersWithoutContentType,
    });
  }

  async updatePet(id: number, petData: Record<string, string | number | boolean | null | undefined>): Promise<Pet> {
    return this.request<Pet>(`/pets/${id}/`, {
      method: 'PUT',
      body: JSON.stringify(petData),
    });
  }



  async deletePet(id: number): Promise<void> {
    await this.request(`/pets/${id}/`, { method: 'DELETE' });
  }

  async getMyPets(): Promise<PaginatedResponse<Pet>> {
    return this.request<PaginatedResponse<Pet>>('/pets/my/');
  }





  // Favorites
  async getFavorites(): Promise<PaginatedResponse<Favorite>> {
    return this.request<PaginatedResponse<Favorite>>('/pets/favorites/');
  }

  async toggleFavorite(petId: number): Promise<{ favorited: boolean }> {
    return this.request<{ favorited: boolean }>(`/pets/${petId}/toggle-favorite/`, {
      method: 'POST',
    });
  }

  // Veterinary Clinics
  async getVeterinaryClinics(): Promise<VeterinaryClinic[]> {
    const response = await this.request<VeterinaryClinic[] | { results: VeterinaryClinic[] }>('/pets/veterinary-clinics/');
    return Array.isArray(response) ? response : response.results || [];
  }

  // Breeding Requests
  async createBreedingRequest(data: {
    target_pet_id: number;
    my_pet_id: number;
    meeting_date: string;
    message?: string;
    contact_phone: string;
    veterinary_clinic: string;
  }): Promise<BreedingRequest> {
    return this.request<BreedingRequest>('/pets/breeding-requests/', {
      method: 'POST',
      body: JSON.stringify({
        target_pet: data.target_pet_id,
        requester_pet: data.my_pet_id,
        meeting_date: data.meeting_date,
        message: data.message,
        contact_phone: data.contact_phone,
        veterinary_clinic: data.veterinary_clinic,
      }),
    });
  }

  async getMyBreedingRequests(): Promise<BreedingRequest[]> {
    const response = await this.request<BreedingRequest[] | { results: BreedingRequest[] }>('/pets/breeding-requests/my/');
    return Array.isArray(response) ? response : response.results || [];
  }

  async getReceivedBreedingRequests(): Promise<BreedingRequest[]> {
    const response = await this.request<BreedingRequest[] | { results: BreedingRequest[] }>('/pets/breeding-requests/received/');
    return Array.isArray(response) ? response : response.results || [];
  }

  async respondToBreedingRequest(requestId: number, response: 'approve' | 'reject', message?: string): Promise<BreedingRequest> {
    return this.request<BreedingRequest>(`/pets/breeding-requests/${requestId}/respond/`, {
      method: 'POST',
      body: JSON.stringify({
        response,
        message: message || '',
      }),
    });
  }

  // Notifications
  async getNotifications(): Promise<Notification[]> {
    const response = await this.request<Notification[] | { results: Notification[] }>('/pets/notifications/');
    return Array.isArray(response) ? response : response.results || [];
  }

  async getUnreadNotificationsCount(): Promise<{ unread_count: number }> {
    return this.request<{ unread_count: number }>('/pets/notifications/unread-count/');
  }

  async markNotificationAsRead(notificationId: number): Promise<{ message: string }> {
    return this.request<{ message: string }>(`/pets/notifications/${notificationId}/mark-read/`, {
      method: 'POST',
    });
  }

  async markAllNotificationsAsRead(): Promise<{ message: string }> {
    return this.request<{ message: string }>('/pets/notifications/mark-all-read/', {
      method: 'POST',
    });
  }

  async sendChatMessageNotification(chatId: string, message: string): Promise<{ message: string }> {
    return this.request<{ message: string }>('/pets/notifications/chat-message/', {
      method: 'POST',
      body: JSON.stringify({
        chat_id: chatId,
        message: message
      })
    });
  }

  // Stats
  async getStats(): Promise<{
    total_pets: number;
    available_pets: number;
    breeding_requests: number;
    successful_matings: number;
    by_type: Record<string, number>;
  }> {
    return this.request('/pets/stats/');
  }

  // Phone OTP
  async sendPhoneOTP(phoneNumber: string): Promise<{ message: string; expires_in: number }> {
    return this.request('/accounts/send-phone-otp/', { 
      method: 'POST',
      body: JSON.stringify({ phone_number: phoneNumber })
    });
  }

  async verifyPhoneOTP(phoneNumber: string, otpCode: string): Promise<{ message: string; user: User }> {
    return this.request('/accounts/verify-phone-otp/', { 
      method: 'POST',
      body: JSON.stringify({ 
        phone_number: phoneNumber, 
        otp_code: otpCode 
      })
    });
  }

  async verifyFirebasePhone(phoneNumber: string): Promise<{ message: string; user: User }> {
    return this.request('/accounts/verify-firebase-phone/', { 
      method: 'POST',
      body: JSON.stringify({ phone_number: phoneNumber })
    });
  }

  // Chat API Methods
  async getChatRooms(): Promise<{ results: ChatRoomList[]; count: number }> {
    return this.request('/pets/chat/rooms/');
  }

  async getArchivedChatRooms(): Promise<{ results: ChatRoomList[]; count: number }> {
    return this.request('/pets/chat/rooms/archived/');
  }

  async getChatRoom(chatId: number): Promise<ChatRoom> {
    return this.request(`/pets/chat/rooms/${chatId}/`);
  }

  async getChatRoomByFirebaseId(firebaseChatId: string): Promise<ChatRoom> {
    return this.request<ChatRoom>(`/pets/chat/firebase/${firebaseChatId}/`);
  }

  async getChatRoomByBreedingRequest(breedingRequestId: number): Promise<ChatRoom | null> {
    try {
      const response = await this.request<ChatRoom>(`/pets/chat/breeding-request/${breedingRequestId}/`);
      return response;
    } catch (error) {
      console.error('Error getting chat room by breeding request:', error);
      return null;
    }
  }

  async uploadChatImage(imageFile: File): Promise<{ image_url: string; filename: string }> {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      
      // Get the token for authentication
      const token = localStorage.getItem('authToken');
      
      const response = await fetch(`${API_BASE_URL}/pets/chat/upload-image/`, {
        method: 'POST',
        body: formData,
        headers: {
          ...(token && { Authorization: `Token ${token}` }),
          // Don't set Content-Type for FormData, let the browser set it
        },
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Upload failed:', response.status, errorText);
        throw new Error(`Upload failed: ${response.status}`);
      }
      
      const result = await response.json();
      
      // Convert relative URLs to absolute URLs
      if (result.image_url && !result.image_url.startsWith('http')) {
        result.image_url = `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''}${result.image_url}`;
      }
      
      return result;
    } catch (error) {
      console.error('Error uploading chat image:', error);
      throw error;
    }
  }

  async getChatRoomContext(chatId: number): Promise<{ id: number; firebase_chat_id: string; chat_context: ChatContext }> {
    return this.request(`/pets/chat/rooms/${chatId}/context/`);
  }

  async createChatRoom(breedingRequestId: number): Promise<{
    chat_room: ChatRoom;
    context: ChatContext;
    message: string;
  }> {
    return this.request('/pets/chat/create/', {
      method: 'POST',
      body: JSON.stringify({
        breeding_request_id: breedingRequestId
      })
    });
  }

  async archiveChatRoom(chatId: number): Promise<{ message: string }> {
    return this.request(`/pets/chat/rooms/${chatId}/archive/`, {
      method: 'POST'
    });
  }

  async reactivateChatRoom(chatId: number): Promise<{
    message: string;
    chat_room: ChatRoom;
  }> {
    return this.request(`/pets/chat/rooms/${chatId}/reactivate/`, {
      method: 'POST'
    });
  }

  async getChatRoomStatus(chatId: number): Promise<ChatStatus> {
    return this.request(`/pets/chat/rooms/${chatId}/status/`);
  }

  async getUserChatStatus(): Promise<UserChatStatus> {
    return this.request('/pets/chat/user-status/');
  }

  // Adoption methods
  async getAdoptionPets(filters?: {
    pet_type?: string;
    breed?: number;
    gender?: string;
    location?: string;
    user_lat?: number;
    user_lng?: number;
  }): Promise<Pet[]> {
    const queryParams = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== '' && value !== null) {
          queryParams.append(key, value.toString());
        }
      });
    }
    const queryString = queryParams.toString();
    const url = `/pets/adoption/pets/${queryString ? `?${queryString}` : ''}`;
    
    console.log('🔍 API: URL:', url);
    console.log('🔍 API: Query params:', queryString);
    
    return this.request(url);
  }

  async createAdoptionRequest(data: AdoptionRequestCreate): Promise<AdoptionRequest> {
    // Create FormData for file uploads
    const formData = new FormData();
    
    // Add all non-file fields
    Object.keys(data).forEach(key => {
      const value = data[key as keyof AdoptionRequestCreate];
      if (value !== null && value !== undefined && value !== '') {
        if (typeof value === 'boolean') {
          formData.append(key, value.toString());
        } else if (typeof value === 'number') {
          formData.append(key, value.toString());
        } else if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, value as string);
        }
      }
    });

    return this.request('/pets/adoption/', {
      method: 'POST',
      body: formData,
    });
  }

  async getMyAdoptionRequests(): Promise<AdoptionRequestList[]> {
    const response = await this.request<AdoptionRequestList[] | { results: AdoptionRequestList[] }>('/pets/adoption/my/');
    return Array.isArray(response) ? response : response.results || [];
  }

  async getReceivedAdoptionRequests(): Promise<AdoptionRequestList[]> {
    const response = await this.request<AdoptionRequestList[] | { results: AdoptionRequestList[] }>('/pets/adoption/received/');
    return Array.isArray(response) ? response : response.results || [];
  }

  async getAdoptionRequest(requestId: number): Promise<AdoptionRequest> {
    return this.request(`/pets/adoption/${requestId}/`);
  }

  async respondToAdoptionRequest(
    requestId: number, 
    action: 'approve' | 'reject' | 'complete',
    notes?: string,
    admin_notes?: string
  ): Promise<{message: string; adoption_request: AdoptionRequest}> {
    return this.request(`/pets/adoption/${requestId}/respond/`, {
      method: 'POST',
      body: JSON.stringify({
        action,
        notes: notes || '',
        admin_notes: admin_notes || '',
      }),
    });
  }

  async getAdoptionStats(): Promise<AdoptionStats> {
    return this.request('/pets/adoption/stats/');
  }
}

export const apiService = new ApiService(); 