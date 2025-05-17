export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_conversations: {
        Row: {
          agent_id: string
          created_at: string
          id: string
          sentiment: string | null
          session_id: string
          topics: Json | null
          transcript: Json
          user_id: string | null
        }
        Insert: {
          agent_id: string
          created_at?: string
          id?: string
          sentiment?: string | null
          session_id: string
          topics?: Json | null
          transcript: Json
          user_id?: string | null
        }
        Update: {
          agent_id?: string
          created_at?: string
          id?: string
          sentiment?: string | null
          session_id?: string
          topics?: Json | null
          transcript?: Json
          user_id?: string | null
        }
        Relationships: []
      }
      cms_pages: {
        Row: {
          created_at: string
          id: string
          meta_description: string | null
          slug: string
          status: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          meta_description?: string | null
          slug: string
          status?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          meta_description?: string | null
          slug?: string
          status?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      cms_sections: {
        Row: {
          content: string | null
          created_at: string
          id: string
          order_index: number
          page_id: string | null
          section_type: string
          title: string
          updated_at: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          order_index: number
          page_id?: string | null
          section_type?: string
          title: string
          updated_at?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          order_index?: number
          page_id?: string | null
          section_type?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cms_sections_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "cms_pages"
            referencedColumns: ["id"]
          },
        ]
      }
      faqs: {
        Row: {
          answer: string
          category: string
          created_at: string
          id: string
          page_path: string | null
          position: number | null
          question: string
          updated_at: string
        }
        Insert: {
          answer: string
          category: string
          created_at?: string
          id?: string
          page_path?: string | null
          position?: number | null
          question: string
          updated_at?: string
        }
        Update: {
          answer?: string
          category?: string
          created_at?: string
          id?: string
          page_path?: string | null
          position?: number | null
          question?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "faqs_page_path_fkey"
            columns: ["page_path"]
            isOneToOne: false
            referencedRelation: "seo_metadata"
            referencedColumns: ["page_path"]
          },
        ]
      }
      leads: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          name: string | null
          page_title: string | null
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          name?: string | null
          page_title?: string | null
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string | null
          page_title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      llm_optimized_content: {
        Row: {
          content: string
          content_type: string
          created_at: string
          embedding_json: Json | null
          id: string
          keywords: string[] | null
          page_path: string | null
          updated_at: string
        }
        Insert: {
          content: string
          content_type: string
          created_at?: string
          embedding_json?: Json | null
          id?: string
          keywords?: string[] | null
          page_path?: string | null
          updated_at?: string
        }
        Update: {
          content?: string
          content_type?: string
          created_at?: string
          embedding_json?: Json | null
          id?: string
          keywords?: string[] | null
          page_path?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "llm_optimized_content_page_path_fkey"
            columns: ["page_path"]
            isOneToOne: false
            referencedRelation: "seo_metadata"
            referencedColumns: ["page_path"]
          },
        ]
      }
      messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string | null
        }
        Relationships: []
      }
      page_views: {
        Row: {
          id: string
          ip_address: string | null
          page_path: string
          page_title: string | null
          referrer: string | null
          user_agent: string | null
          visited_at: string
        }
        Insert: {
          id?: string
          ip_address?: string | null
          page_path: string
          page_title?: string | null
          referrer?: string | null
          user_agent?: string | null
          visited_at?: string
        }
        Update: {
          id?: string
          ip_address?: string | null
          page_path?: string
          page_title?: string | null
          referrer?: string | null
          user_agent?: string | null
          visited_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          email: string
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          email: string
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          email?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_metadata: {
        Row: {
          canonical_url: string | null
          created_at: string
          id: string
          meta_description: string
          og_description: string | null
          og_image_url: string | null
          og_title: string | null
          page_path: string
          title: string
          updated_at: string
        }
        Insert: {
          canonical_url?: string | null
          created_at?: string
          id?: string
          meta_description: string
          og_description?: string | null
          og_image_url?: string | null
          og_title?: string | null
          page_path: string
          title: string
          updated_at?: string
        }
        Update: {
          canonical_url?: string | null
          created_at?: string
          id?: string
          meta_description?: string
          og_description?: string | null
          og_image_url?: string | null
          og_title?: string | null
          page_path?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      structured_data: {
        Row: {
          created_at: string
          id: string
          page_path: string | null
          schema_data: Json
          schema_type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          page_path?: string | null
          schema_data: Json
          schema_type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          page_path?: string | null
          schema_data?: Json
          schema_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "structured_data_page_path_fkey"
            columns: ["page_path"]
            isOneToOne: false
            referencedRelation: "seo_metadata"
            referencedColumns: ["page_path"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      voice_analytics: {
        Row: {
          ai_response_count: number | null
          browser: string | null
          conversation_id: string | null
          created_at: string
          device_type: string | null
          duration_seconds: number | null
          id: string
          user_query_count: number | null
          word_count: number | null
        }
        Insert: {
          ai_response_count?: number | null
          browser?: string | null
          conversation_id?: string | null
          created_at?: string
          device_type?: string | null
          duration_seconds?: number | null
          id?: string
          user_query_count?: number | null
          word_count?: number | null
        }
        Update: {
          ai_response_count?: number | null
          browser?: string | null
          conversation_id?: string | null
          created_at?: string
          device_type?: string | null
          duration_seconds?: number | null
          id?: string
          user_query_count?: number | null
          word_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "voice_analytics_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "ai_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
