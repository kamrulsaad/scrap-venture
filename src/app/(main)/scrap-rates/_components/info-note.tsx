// _components/info-note.tsx
export default function InfoNote() {
    return (
      <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-8 text-sm md:text-base">
        <ul className="list-disc pl-5 space-y-1">
          <li>The prices may vary depending on market conditions.</li>
          <li>Bulk pickups may have different pricing. For large quantities, contact us at <span className="text-green-600 font-medium">+880-1234-567890</span>.</li>
        </ul>
      </div>
    )
  }