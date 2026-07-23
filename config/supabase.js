/**
 * ============================================
 * Astrava Panel
 * Supabase Configuration
 * Version : 1.0.0-beta
 * ============================================
 */

const SUPABASE_URL = "https://gieexeqetzyhydncsubp.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpZWV4ZXFldHp5aHlkbmNzdWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3MjMxNjQsImV4cCI6MjEwMDI5OTE2NH0.03teKU_OLJ3SvitGoXnwHWIQpjph1hYQU0u2vxjSkaQ";

// Membuat client Supabase
const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

// Test koneksi
async function testConnection() {
    try {
        const { error } = await supabase
            .from("owner")
            .select("*")
            .limit(1);

        if (error) {
            console.error("❌ Supabase Error:", error.message);
        } else {
            console.log("✅ Supabase Connected");
        }
    } catch (err) {
        console.error(err);
    }
}

testConnection();