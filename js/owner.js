document.addEventListener("DOMContentLoaded", () => {
    loadOwner();
});

async function loadOwner() {
    const { data, error } = await supabase
        .from("owner")
        .select("*")
        .limit(1)
        .single();

    if (error) {
        console.log("Belum ada data owner.");
        return;
    }

    document.getElementById("ownerName").value = data.owner_name || "";
    document.getElementById("ownerNumber").value = data.owner_number || "";
    document.getElementById("instagram").value = data.instagram || "";
    document.getElementById("youtube").value = data.youtube || "";
    document.getElementById("website").value = data.website || "";
}

async function saveOwner() {

    const owner_name = document.getElementById("ownerName").value;
    const owner_number = document.getElementById("ownerNumber").value;
    const instagram = document.getElementById("instagram").value;
    const youtube = document.getElementById("youtube").value;
    const website = document.getElementById("website").value;

    const { data } = await supabase
        .from("owner")
        .select("id")
        .limit(1);

    if (data.length > 0) {

        const id = data[0].id;

        const { error } = await supabase
            .from("owner")
            .update({
                owner_name,
                owner_number,
                instagram,
                youtube,
                website
            })
            .eq("id", id);

        if (error) {
            alert("❌ Gagal update data.");
            console.log(error);
            return;
        }

        alert("✅ Data owner berhasil diupdate.");

    } else {

        const { error } = await supabase
            .from("owner")
            .insert([{
                owner_name,
                owner_number,
                instagram,
                youtube,
                website
            }]);

        if (error) {
            alert("❌ Gagal menyimpan data.");
            console.log(error);
            return;
        }

        alert("✅ Data owner berhasil disimpan.");
    }
}